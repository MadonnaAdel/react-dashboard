import './post.scss'
import Details from '../../../components/details/Details'
import { singleUser } from '../../../Data'
export default function Post() {

    return (
        <div>
            <Details {...singleUser} />
        </div>
    )
}
