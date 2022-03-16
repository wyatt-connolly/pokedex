import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function Pokemon({ pokemon }) {
  const pokeIndex = ("000" + pokemon.id).slice(-3);
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const renderTypes = () =>
    pokemon.types.map((type) => (
      <li key={type.slot} className="px-2 py-1 bg-slate-700 rounded">
        {type.type.name}
      </li>
    ));

  const renderStats = () =>
    pokemon.stats.map((stat, index) => (
      <div key={index} className="bg-white my-2 rounded p-1">
        <div className="bg-slate-900" style={{ width: `${stat.base_stat}%` }}>
          <span className="m-2">{stat.stat.name}:</span>
          {stat.base_stat}
        </div>
      </div>
    ));
  return (
    <Layout title={pokemon.name}>
      <div className="flex flex-col justify-center items-center">
        <span className="absolute text-[400px] font-bold text-slate-500">
          #{pokeIndex}
        </span>
        <Image
          width={400}
          height={400}
          alt={pokemon.name}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
        />
      </div>
      <div className="bg-slate-900 rounded p-5">
        <ul className="flex gap-5">{renderTypes()}</ul>
      </div>
      <div className="bg=slate-700">{renderStats()}</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res =
    await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}
  `);
  const pokemon = await res.json();

  // Pass data to the page via props
  return { props: { pokemon } };
}
