import { useState } from "react";
import './App.css'
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({faqs}) {
  const [curopen,setcurOpen]=useState(null);

  return <div>
{faqs.map(

   (f,i)=> <AccordionItem curopen={curopen} onopen={setcurOpen} num={i} title={f.title} text={f.text} />)}
  </div>;
}
function AccordionItem({num,title,text , curopen,onopen}){
  const isOpen=num===curopen;
  function handleToogle (){
onopen(num)
  }
return(
  <div className={`item ${isOpen ? 'open': ''}`} onClick={handleToogle}>
    <p className="number">{num}</p>
    <p className="text">{title}</p>
    <p className="icon">{isOpen ? "+" : "-"}</p>
    { isOpen && <div className="content-box">{text}</div>}

  </div>
)
}