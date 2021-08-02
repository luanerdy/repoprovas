import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);

    position: fixed;
    z-index: 20;
    width: 100%;
    height: 100px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 70%;
    }

    .title {
        font-size: 36px;
    }

    * {
        margin: 0 10px;
    }
`;

export { Nav };
