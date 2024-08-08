/* eslint-disable react/prop-types */
export default function EmailContent({ email }) {
    return(
        <div 
        className=""
        >
        <div>{email.subject}</div>   
        <div>De: {`<${email.from}>`}</div>
        <div>Para: {`<fulano@email.com>`}</div>
        <div>Em: {email.createdAt}</div>
        <hr />
        {email.body}
        </div>
    )
}