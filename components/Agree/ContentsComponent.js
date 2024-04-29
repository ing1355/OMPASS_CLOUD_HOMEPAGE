import { Fragment } from "react";
import useTranslation from "../../lib/useTranslation";
import CircleNumText from "../CircleNumText";
import styles from '../../css/agree.module.css'

export const SubContent = ({ index, title }) => {
  const { t } = useTranslation();
  return <div>
    <label>{index}.</label>
    <p
      onClick={() => {
        var offset = $(`.${index}st`).offset();
        $("html,body").animate({ scrollTop: offset.top - 120 }, "linear");
      }}
    >
      {t(title)}
    </p>
  </div>
}

export const MainUlText = ({ title1, title2, ulClassName, index }) => {
  const { t } = useTranslation();
  return <ul className={ulClassName}>
    <li><CircleNumText index={index}/></li>
    <li>
      {t(title1)} {title2 && <br />}
      {title2 ? t(title2) : ''}
    </li>
  </ul>
}

export const SubUlText = ({ title, ulClassName }) => {
  const { t } = useTranslation();
  return <ul className={ulClassName}>
    <li>-</li>
    <li>
      {t(title)}
    </li>
  </ul>
}

export const WithTitle = ({ title, children, index, className }) => {
  const { t } = useTranslation();
  const _className = className ? className : `${index}st${className ? (" " + className) : ` ${styles['content']}`}`
  return <div className={_className}>
    <h5>{t(title)}</h5>
    {children}
  </div>
}

const ContentsWithIcon = ({labelClassName, numIcon, icon, content, noIcon, contentClassName}) => {
    const { t } = useTranslation();
    return <>
      <ul className={labelClassName}>
        {!noIcon && <li>{icon || (numIcon && CircleNumText({index: numIcon}))}</li>}
        <li className={contentClassName}>
          {typeof content === 'string' ? t(content) : content.map((_, ind, arr) => <Fragment key={ind}>
            {t(_)}
            {(arr.length - 1 !== ind)  && <br/>}
          </Fragment>)}
        </li>
      </ul>
    </>
  }

  export default ContentsWithIcon