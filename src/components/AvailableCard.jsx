import React from 'react'

export const AvailableCard = (props) => {
  const {availableDriver, key} = props
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={require(`../assets/${availableDriver.image}`)} alt={availableDriver.name} /></figure>
  <div class="card-body">
    <h2 class="card-title">{availableDriver.name}</h2>
    <p>{availableDriver.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Sélectionner</button>
    </div>
  </div>
</div>
  )
}
