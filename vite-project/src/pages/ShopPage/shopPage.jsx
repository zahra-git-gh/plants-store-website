import { CardsContainer } from "../../components/cardsShopContainer";
import { Header } from "../../components/header";
import { TableOrders } from "../../components/table";


export function ShopPage(){
    console.log(window.location.href);
    return (
        <>
        <Header></Header>

        <TableOrders/>
        <CardsContainer />
        </>
    )
}