import styled from 'styled-components';

const Home = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    padding-top: 100px;

    > div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        background-color: rgba(26, 6, 91, .5);
        color: white;
        box-shadow: 0 0 20px rgba(0, 0, 0, .25);

        border-radius: 50px;
        height: 300px;
        width: 50%;
        max-width: 400px;

        margin: 0 15px;

        font-size: 24px;

        > div {
            height: 67%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;

            > * {
                margin: 5px 0;
            }
        }
    }

    > div:first-of-type {
        justify-content: space-between;

        > p {
            width: 100%;
            height: 33%;

            background-color: rgba(26, 6, 91, 1);

            border-top-right-radius: 50px;
            border-top-left-radius: 50px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    a {
        display: flex;
        align-items: center;

        > svg {
            margin: 0 0 0 10px;
        }
    }

    @media (max-width: 768px) {   
        flex-direction: column;
        height: 100%;

        > div {
            width: 100%;
            height: 240px;

            border-radius: 0;
            box-shadow: none;
        }
        
        > div:first-of-type {
            height: 240px;
            
            border-bottom: 1px solid white;
            
            > p {
                border-radius: 0;
            }
        }
    }
`;

export { Home };
