import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeC, ThemeType } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch();
    // useDispatch, onChangeCallback
    const onChangeOption = (theme: ThemeType) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div className={s.radio}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeOption}
                />
            </div>
            <hr />
        </div>
    );
}

export default HW12;
