import {BrowserRouter,Link,Switch,Route,useRouteMatch,Redirect} from 'react-router-dom'
import Html from './Html'
import Css from './Css'
import JavaScript from './JavaScript'

export default function Technologies(){

    let pathInfo=useRouteMatch();

    return(
        <BrowserRouter>
        <div className="row mt-5">
            {/*Side Navigation Bar */}
            <div className="col-sm-3">
                <ul className="bg-dark nav flex-column">
                    <li className="nav-item">
                        <Link to={`${pathInfo.path}/html`} className="nav-link">HTML</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${pathInfo.path}/css`} className="nav-link">CSS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${pathInfo.path}/js`} className="nav-link">JavaScript</Link>
                    </li>
                </ul>
            </div>
            {/* to load components */}
            <div className="col-sm-9">
                <Switch>
                    <Route path={`${pathInfo.path}/html`}>
                        <Html/>
                    </Route>
                    <Route path={`${pathInfo.path}/css`}>
                        <Css/>
                    </Route>
                    <Route path={`${pathInfo.path}/js`}>
                        <JavaScript/>
                    </Route>
                    <Route path={`${pathInfo.path}`}>
                        <Redirect to={`${pathInfo.path}/html`} />
                    </Route>
                </Switch>
            </div>
        </div>
        </BrowserRouter>
    )
}