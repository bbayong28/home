import React, { useEffect, useState } from 'react'

const Info = () => {
    const [name, setName] = useState();
    const [nickname, setNickname] = useState();

    /* useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        });
    });  */

    //처음 렌더링 될때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우, 두번째 파라미터로 비어있는 배열을 넣어주면 됨.
    /* useEffect(() => {
        console.log('마운트 될 때만 실행됩니다.');
    }, []); */


    //useEffect 는 기본적으로 렌더링 되고난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라집니다.
    //만약 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect 에서 뒷정리(cleanup) 함수를 반환해주어야 합니다.
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
            };
    }, []);

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeNickname= (e) => {
        setNickname(e.target.value);
    }


    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickname}
                </div>
            </div>                  
        </div>
    )
}

export default Info