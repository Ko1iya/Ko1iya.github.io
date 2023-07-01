import { product } from "../data/product"
import { IProduct } from "../models"

interface HeaderProps {
  product: IProduct
}

export function Header(props: HeaderProps) {
  return <div>{props.product.id}</div>
}
