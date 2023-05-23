import styled from 'styled-components'

const StyledAddress = styled.form`
  @media (min-width: 300px) {
    max-width: 500px;
    /* margin: 0 auto; */
    display: flex;
    flex-flow: row wrap;
    gap: 4%;
    background-color: #808080c3;
    padding: 1rem;
    /* justify-content: space-around; */
    > label {
      /* flex-basis: 50%; */
      /* display: block; */
      margin: 0.5rem 0;
      > input {
        width: 100%;
        height: 2rem;
      }
    }
    > :nth-child(1) {
      flex-basis: 99%;
      /* order: 1; */
    }
    > :nth-child(2),
    :nth-child(3),
    :nth-child(5) {
      flex-basis: 47%;
    }
    > :nth-child(4) {
      flex-basis: 47%;
    }
  }
`
export { StyledAddress }
