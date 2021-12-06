import { useRouter } from 'next/router'

const Shoparize = () => {
    const router = useRouter()
    const { id } = router.query

    return <p>Post: {id}</p>
}

export default Shoparize;