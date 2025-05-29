import './order.scss'

import Details from '../../../components/details/Details'
import { singleProduct } from '../../../Data'
export default function Order() {

    return (
        <div>

            <Details {...singleProduct} />

        </div>
    )
}
