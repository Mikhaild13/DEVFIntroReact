/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom"

export default function VistaDetalle(props) {

  const location = useLocation()

  const item = location.state

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>
        <strong>{item.price}</strong>
      </p>
    </div>
  )
}
