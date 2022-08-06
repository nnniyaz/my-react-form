import classes from './Data.module.css'
import xmark from '../../assets/xmark-solid.svg'

const Data = ({ data, handleClick }) => {
    return (
        <div className={classes.info}>
            <div className={classes.head}>
                Name: {data.name}
                <img
                    onClick={() => handleClick(data.email)}
                    className={classes.icon}
                    src={xmark}
                    alt="xmark" />
            </div>
            <div>Surname: {data.surname}</div>
            <div>Age: {data.age}</div>
            <div>Gender: {data.gender}</div>
            <div>Country: {data.country}</div>
            <div>Email: {data.email}</div>
        </div>
    );
}

export default Data;