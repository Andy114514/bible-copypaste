import React from "react"
import Quote from "../components/Quote"

export default function Home() {
  return (
    <Quote
      snippetId="support"
      title="支援"
      template={
        "${支援者|桐生會長}，請您支援 #${被支援者|桐生ココ} ，她僅僅因為說${被支援者的主张|台灣是個國家}，就受${被支援者的反对者|中國五毛}機器人的攻擊以及人身威脅，和未婚夫${无关者|肖戰}的婚約也被迫取消，請一定聲援她！"
      }
    ></Quote>
  )
}
