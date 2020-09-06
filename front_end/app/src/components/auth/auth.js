/**
 * @author るりと
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { reload } from '../../actions/authAction';

/**
 * stateからログインしているかどうかを抽出している
 * @param {*} state - reduxのstate
 * @returns {boolean} - ログインしているかどうか
 */
export const AuthSelector = (state) => {
  return state.auth;
};

/**
 * ログイン状態を管理する
 * ログインが必要となるページにアクセスする際にはここでログインしているかどうかを判断する
 * ログインしている場合は表示したいページを表示する
 * ログインしていない場合はトップページに遷移させる
 * @param {*} props - 表示したいcomponent
 */

const Auth = (props) => {
  const auth = useSelector(AuthSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    dispatch(reload(jwt));
  },[])

  if( !auth.isLoading && !auth.isLoggedIn ) {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$")
    console.log(auth);
    // TODO: useHistoryを用いて、ブラウザバックなどに対応できるか調査
    // TODO: toppageに飛ばした後、ログインしてと通知を表示させる
    history.push("/signin");
  }

  if( auth.isLoading ) {
    return (
      <p> loading... </p>
    )
  } else {
    return (
        <div>{props.children}</div>
    )
  }
}

export default Auth;