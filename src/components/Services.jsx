import React from 'react';
import calecheImg from '../assets/calecherep.png'
import caleche2Img from '../assets/calechesale.jpg'

const Services = () => {
  return (
    <div className="cards flex flex-col flex-wrap px-2.5">
<div className="card card-side pt-4.5 rounded-none bg-base-100 shadow-xl">
  <figure><img src={calecheImg} alt="calèche"/></figure>
  <div className="card-body">
    <h2 className="card-title">Réparations!</h2>
    <p>- Un pneu creuvé sur votre calèche, pas de problème. Nous le réparons en moins de 30minute.</p>
    <p> - Un impact, un pare-Brice cassé, pas de problème. Nous le réparons en moins de 30minute.</p>
    <p>Et en plus on vous offre les balais d'essuis glace...</p>
  </div>
</div>
<div className="py-6 mt-8 rounded-none shadow-xl card card-side bg-base-100">
  <figure><img src={caleche2Img} class="w3-rouw-96" alt="calèche"/></figure>
  <div className="card-body">
    <h2 className="card-title">Achats-Ventes!</h2>
    <p>- Achats: nous achetons au meilleur prix, le plus bas votre calèche.</p>
    <p>- Ventes: Nous vendons au meilleur prix, le plus haut une calèche nickel.</p>
    <p>Avec nous pas de probléme, pas de souccis pas de garantie!</p>
  </div>
</div>
</div>
  );
};

export default Services;
