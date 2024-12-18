import Card from "./components/Card"

function App() {

    return (
        <>
            <Card />
            <Card cardName="Shivam" cardFollowers="+50" cardLocation="Patna, Bihar" cardPhoto="https://avatarfiles.alphacoders.com/375/375112.png" />
            <Card cardName="Ramchandra" cardFollowers="+30" cardLocation="Rajasthan, IN" cardPhoto="https://avatarfiles.alphacoders.com/375/375727.png" />
            <Card cardName="Sukhpreet Singh" cardFollowers="+10" cardLocation="Chhinda, IN" cardPhoto="https://avatarfiles.alphacoders.com/375/375577.png" />
        </>
    )
}

export default App
