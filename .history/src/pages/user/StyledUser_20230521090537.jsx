import styled from 'styled-components'

const StyledAddress = styled.form`
  max-width: 500px;
  /* margin: 0 auto; */
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-around; */
  > label > input {
    /* flex-basis: 50%; */
    /* display: block; */
    width: 100%;
  }
  > :nth-child(1) {
    flex-basis: 100%;
    background-color: red;
    /* order: 1; */
  }
  > :nth
`
export { StyledAddress }
