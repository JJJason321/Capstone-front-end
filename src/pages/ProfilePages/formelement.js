import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';


export const Container = styled.div`
min-height:692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
    108deg,
    rgba(153,204,255,1) 0%,
    rgba(10,201,122,1) 100%
);
`;

export const Container2 = styled.div`
min-height:692px;
height:auto;
position: relative;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
    108deg,
    rgba(153,204,255,1) 0%,
    rgba(10,201,122,1) 100%
);
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:16px;

    @media screen and (max-width: 400px){
        height:80%;
    }
`;



export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color:#fff;
    font-weight:700;
    font-size: 32px;
    background-color: white;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const FormUnite = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: Left;
    align-items: stretch;
`

export const Form = styled.form`
    background: #010101;
    max-width:600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;

    }
`;

export const Form2 = styled.form`
    background: #010101;
    max-width:800px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;

    }
`;

export const CalendarWrap = styled.div`
    background-color:rgba(255,255,255,0.9) ;
    
    padding: 16px 16px;
    margin-bottom: 32px;
    margin-left: 8px;
    margin-right:8px;
    
    border: none;
    border-radius: 4px;
    font-size: 24px;
    font-style: italic;
    width: 275px;
    
    align-items:center;

`


export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color:#fff;
    font-size:20px;
    font-weight:400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormLabel2 = styled.label`
    margin: 16px;
    height:50px;
    font-size: 20px;
    color: #fff;
    
    
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    font-style: italic;
    
`;

export const FormInput2 = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    margin-left: 8px;
    margin-right:8px;
    
    border: none;
    border-radius: 4px;
    font-size: 20px;
    font-style: italic;
    width: 250px;
    
    align-items:center;

`;

export const FormSelect = styled.select`
    padding: 16px 16px;
    margin-bottom: 32px;
    margin-left: 8px;
    margin-right:8px;
    
    border: none;
    border-radius: 4px;
    font-size: 20px;
    font-style: italic;
    width: 275px;
    
    align-items:center;

`;

export const FormRow = styled.div`
    
    
    display:grid;
    align-items:center;
    justify-items:right;


    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 10px 10px;
    grid-template-areas:
    ". . .";

   

`

export const FormRow2 = styled.div`
    
    
    display:grid;
    align-items:center;
    justify-items:right;
    
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 10px;
    grid-template-areas:
    ". . ";

   

`


export const FormButton = styled.button`

    background: ${({ btncolor }) => (btncolor ? '#0066CC' : '#00CC66')};
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    
`;

export const FormButtonLink = styled(Link)`
display:flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding:8px 16px;
height: 100%;
width:100%;
border:none;
outline:none;
`;

export const Button = styled.button`
background: ${({ btncolor }) => (btncolor ? '#0066CC' : '#00CC66')};
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    width: 200px;
`;

export const Button2 = styled.button`
background: ${({ btncolor }) => (btncolor ? '#0066CC' : '#c75f0f')};
    padding: 8px;
    margin: 8px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    
    width: ${({ small }) => (small ? '100px' : '200px')};
    height: ${({ small }) => (small ? '50px' : '100px')};
`;

export const Button3 = styled.button`
background: ${({ btncolor }) => (btncolor ? '#0066CC' : '#c75f0f')};
    margin:4px 8px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size:13px;
    cursor: pointer;
    width: 100px;
    height: 75px;
    text-align: center;


`;

export const ButtonWrap = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Text = styled.span`
    text-align: center;
    margin-top:24px;
    color: #fff;
    font-size:14px;
`;

export const NavIcon = styled(FaMagento)`
margin-right:0.5rem;
`;


export const TableWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const TableContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
`;

export const Table = styled.table`
    height: auto;
    width: auto;
    
    align-items: center;
    text-align: center;
    border: 1px solid black;
    justify-content: center;
`

export const THeading = styled.thead`
    margin: 8px;
    padding: 8px;
    
`

export const TRow = styled.tr`
    height: 45px;
    justify-content:center;
`

export const THead = styled.th`
    border: 1px black solid;
    margin: 8px;
    padding: 8px;
    text-align: center;
    justify-content: left;
    width: 200px;
`

export const TBody = styled.tbody`

`

export const FormCheckbox = styled.input`
height:50px;
width: 50px;
padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    font-style: italic;
`