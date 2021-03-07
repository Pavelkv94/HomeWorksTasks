import React from 'react'
import AlternativeMessage from './AlternativeMessage'
import Message from './Message'



const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Henry',
    message: `Hello, I'm JS Developer`,
    time: '22:00',
}

const messageData2 = {
    avatar: 'https://g0.sunmag.me/sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png',
    name: 'Anna',
    message: `Nice`,
    time: '22:15',
}

function HW1() {
    return (
        <div>
            <hr />
            homeworks 1

            {/* should work (должно работать) */}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time} />
            <hr />
        </div>
    )
}

export default HW1
