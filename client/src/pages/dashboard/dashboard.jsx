import { connect } from 'react-redux';
import { SetCurrentUser } from '../../redux/user/userActions';
const Dashboard = ({setUser}) => {

    

    return(
        <div>
            <p>Logged In</p>
            <p onClick={() => setUser(false)} >Log Out</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setUser: (user) => dispatch(SetCurrentUser(user))
})



export default connect(null,mapDispatchToProps)(Dashboard)