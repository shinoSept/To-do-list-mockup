import type { SidebarProps } from "../libs/types";

export function Sidebar(props: SidebarProps) {
    return (
        <aside
          className="d-flex flex-column p-3"
          style={{
            width: "200px",
            backgroundColor: "#f2f2f2",
            justifyContent: "space-between",
          }}
        >
          {/* เมนูด้านบน */}
          <nav className="nav flex-column gap-2">
            <h5>เมนู</h5>
            <a className="nav-link active" href="#">
              หน้าแรก
            </a>
            <a className="nav-link" href="#">
              รายการ
            </a>
            <a className="nav-link" href="#">
              เกี่ยวกับ
            </a>
          </nav>

          {/* แสดงชื่อผู้ใช้ด้านล่าง */}
          <div className="fw-bold text-muted">
            <p>{props.userName} : {props.type}</p>
          </div>
        </aside>
    );
}