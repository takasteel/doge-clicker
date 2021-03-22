import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      outline: none;
      border: none;
      border-radius: 1rem;
      width: 8rem;
      height: 4rem;
      font-size: 1.5rem;
      cursor: pointer;
      background: var(--yellow);
    }
    button:disabled {
      background-color: #cccccc;
    }
  }

  .doger {
    margin-right: 1.5rem;

    span {
      margin-top: 0.5rem;
    }
  }

  .grandma {
    margin-left: 1.5rem;

    span {
      margin-top: 0.5rem;
    }
  }
`