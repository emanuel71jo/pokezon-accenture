import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import SidebarProfile from "../../components/SidebarProfile";
import { useAuth } from "../../hooks/useAuth";
import { app } from "../../services/api";
import {
  getPricePokemon,
  getPricePokemonValue,
} from "../../utils/getPricePokemon";
import {
  Container,
  ContainerProfile,
  Dados,
  DadosPedido,
  Pedido,
} from "./styles";

interface IOrder {
  items: {
    pokemon: IPokemon;
    id: string;
    pokeId: string;
    pokeName: string;
    created_at: string;
    orderId: string;
  }[];
  id: string;
  created_at: string;
}

interface IPokemon {
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }>;
  types: Array<{
    type: {
      name: string;
      url: string;
    };
  }>;
}

export function Pedidos() {
  const { profile } = useAuth();

  const [orders, setOrders] = useState<Array<IOrder>>([]);

  useEffect(() => {
    async function getOrders() {
      const { data } = await app.get<Array<IOrder>>("/orders");

      data.forEach((item, index) => {
        const items = item.items.map(async (value) => {
          const response = await axios.get<IPokemon>(
            `https://pokeapi.co/api/v2/pokemon/${value.pokeId}`
          );

          return { ...value, pokemon: response.data };
        });

        Promise.all(items).then((res) =>
          setOrders((oldValue) => [...oldValue, { ...data[index], items: res }])
        );
      });
    }
    getOrders();

    return () => setOrders([]);
  }, []);

  function getValueTotal(order: IOrder): string {
    return order.items
      .reduce(
        (total, item) =>
          (total += getPricePokemonValue(
            item.pokemon.abilities.length,
            item.pokemon.stats,
            item.pokemon.types
          )),
        0
      )
      .toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  }

  return (
    <ContainerProfile>
      <SidebarProfile
        fileName={profile?.fileName}
        userName={`${profile?.firstName} ${profile?.lastName}`}
      />

      <Container>
        <h2>Pedidos</h2>
        <Dados>
          {orders.map((order, index) => (
            <>
              <Pedido key={index}>
                <div>
                  <h3>DATA DO PEDIDO</h3>
                  <span>
                    {format(
                      new Date(order.created_at),
                      "dd 'de' MMMM 'de' yyyy",
                      {
                        locale: ptBR,
                      }
                    )}
                  </span>
                </div>

                <div>
                  <h3>TOTAL</h3>
                  <span>{getValueTotal(order)}</span>
                </div>
              </Pedido>
              {order.items.map((item, index) => (
                <DadosPedido key={index}>
                  <img
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
                      item.pokeId
                    ).padStart(3, "0")}.png`}
                    alt={item.pokeName}
                  />
                  <div>
                    <span className="nome">{item.pokeName}</span>
                    <span className="preco">
                      {getPricePokemon(
                        item.pokemon.abilities.length,
                        item.pokemon.stats,
                        item.pokemon.types
                      )}
                    </span>
                  </div>
                </DadosPedido>
              ))}
            </>
          ))}
        </Dados>
      </Container>
    </ContainerProfile>
  );
}

export default Pedidos;
