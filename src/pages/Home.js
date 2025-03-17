import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Index from "./index1";
import "./Nav.css";
export default function Home() {
  const [text, setText] = useState(true);
  return (
    <div className="bac">
      <ul className="ul-li">
        <li>
          <Link
            to="/"
            onClick={() => {
              setText(true);
            }}
          >
            ARIK
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => {
              setText(false);
            }}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => {
              setText(false);
            }}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            to="/Work"
            onClick={() => {
              setText(false);
            }}
          >
            WORK
          </Link>
        </li>
        <li>
          <Link
            to="/Bloge"
            onClick={() => {
              setText(false);
            }}
          >
           BLOG
          </Link>
        </li>
       
       
      </ul>
      {text ? <Index /> : <Outlet />}
    </div>
  );
}
