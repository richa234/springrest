import React,{useEffect} from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';


const Home = () => {
    useEffect(()=>{
        document.title="Home";
      },[])
    return (
        <Jumbotron style={{backgroundColor:"floralwhite"}}>
            <h1>
                Welcome To <b>My CART</b>
            </h1>
            <p>
                About My Cart – India’s Ultimate Online Shopping Site Snapdeal’s vision is to create India’s most reliable and frictionless commerce ecosystem that creates life-changing experiences for buyers and sellers. In February 2010, Kunal Bahl along with Rohit Bansal, started Snapdeal.com - India’s largest online shopping marketplace, with the widest assortment of 35 million plus products across 800 plus diverse categories from over 125,000 regional, national, and international brands and retailers. With millions of users and more than 300,000 sellers, Snapdeal is the online shopping site for Internet users across the country, delivering to 6000+ cities and towns in India. In its journey till now, Snapdeal has partnered with several global marquee investors and individuals such as SoftBank, BlackRock, Temasek, Foxconn, Alibaba, eBay Inc., Premji Invest, Intel Capital, Bessemer Venture Partners, Mr. Ratan Tata, among others. Online Shopping – A Boon The trend of online shopping is becoming a household name and so is Snapdeal. Snapdeal is the preferred choice of hundreds of thousands of online shoppers given its mammoth assortment of 15 million+ products, quick delivery even to the remotest corners of the country, and daily deals, discounts & offers to make products available at slashed down prices to our valuable customers. Get Started! Shop Online Today at Snapdeal If you have been missing out on all the fun of online shopping thinking it requires one to be a technology aficionado then we have good news for you. Shopping online particularly at Snapdeal is a child’s play; all you need is a mobile phone or laptop or tablet with Internet connection to get started. Simply log into Snapdeal.com and browse through the wide assortment of products across categories. Once you have zeroed in on your favorite products, simply place the order by filling in the details; the products will be delivered right at your doorstep. Fulfill Your Entrepreneurial Dreams! Sell Today at Snapdeal Thanks to easy-to-understand, flexible policies and SD Advisors to help sellers at each step, anyone from a manufacturer to wholesaler to retailer can sell on Snapdeal.
            </p>
        </Jumbotron>
    );
}

export default Home;