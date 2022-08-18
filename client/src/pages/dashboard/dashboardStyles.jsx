import styled from 'styled-components'

export const PageContainer = styled.main`
    padding: 0 192px;


    @media screen and (max-width: ${props => props.theme.screen.xl}) {
        padding: 0 168px;
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}) {
        padding: 0 96px;
    }

    @media screen and (max-width: ${props => props.theme.screen.md}) {
        padding: 0 72px;
    }

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        padding: 0 56px;
    }

    @media screen and (max-width: ${props => props.theme.screen.xs}) {
        padding: 0 48px;

    }
`