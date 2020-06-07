import { Menu } from "semantic-ui-react";
import { Link } from "../routes";
export default function Header() {
  return (
    <Menu color="purple"  size="huge" inverted>
      <Link route="/">
        <a className="item">
          <Menu.Item>CrowdCoin</Menu.Item>
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/Campaigns/new">
          <a className="item">
            <Menu.Item>Campaigns</Menu.Item>
          </a>
        </Link>

        <Link route="/Campaigns/new">
          <a className="item">
            <Menu.Item>+</Menu.Item>
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
