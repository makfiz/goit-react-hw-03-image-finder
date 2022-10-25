import { Btn } from 'components/Button/Button.styled'
import { Box } from "components/utils/Box";
export const Button = ({ onClickBtn }) => {
    return <Box
        pt='10px'
        pb='10px'
        display='flex'
        justifyContent='center'>
        <Btn type='button' onClick={() => onClickBtn()}>Load more</Btn></Box>
}