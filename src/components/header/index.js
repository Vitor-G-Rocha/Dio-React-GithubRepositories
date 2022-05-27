import React, { useState } from 'react'
import * as S from './styled'
import useGithub from "../../hooks/github-hooks"

function Header() {

    const { getUser } = useGithub();
    const [userNameForSearch, setUserNameForSearch] = useState()

    const submitGetUser = () => {
        if(!userNameForSearch) return;
        return getUser(userNameForSearch);
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Digite o username para pesquisa..." onChange={(event) => setUserNameForSearch(event.target.value)}/>
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    )
}

export default Header