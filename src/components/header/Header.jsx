import { Link, Navigate } from "react-router-dom";
import searchIcon from "../../asset/search_icon.png"
import DropCategory from "./drop-menu/DropCategory";
import DropNation from "./drop-menu/DropNation";
import "./header.scss";
import { appRouter } from "../const/router.const";
import { useSelector } from "react-redux";

function Header({ searchMovie, handleChange, query, handleGenreChange }) {

    const isUser = useSelector(state => state.auth.user);


    return (
        <div className="header-container">
            <div className="header-nav">
                <Link to={appRouter.home}>
                    <div className="logo">
                        <img
                            src="https://phimmoiyy.net/wp-content/uploads/2023/03/phimmoi.png"
                            alt=""
                            width={200}
                        />
                    </div>
                </Link>
                <div className="nav-bar">
                    <Link to={appRouter.home}><span className="nav">Phim mới</span></Link>
                    <span className="nav">Phim lẻ</span>
                    <span className="nav">Phim bộ</span>
                    <span className="nav"><DropCategory handleGenreChange={handleGenreChange} /></span>
                    <span className="nav"><DropNation /></span>

                </div>
            </div>

            <div className="search">

                <input className="text-search"
                    type="text"
                    name="query"
                    id=""
                    aria-label="Tìm kiếm..."
                    placeholder="Tìm kiếm..."
                    value={query}
                    onChange={handleChange}
                />
                <img
                    className="search-icon"
                    src={searchIcon}
                    alt=""
                    width={20}
                    onClick={searchMovie}
                />
                <div className="login-register">
                    {isUser ? (
                        <span>{isUser.userName}</span>
                    ) : (
                        <>
                            <span><Link to={appRouter.login}>Đăng nhập</Link></span>
                            <span>/</span>
                            <span><Link to={appRouter.register}>Đăng ký</Link></span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;