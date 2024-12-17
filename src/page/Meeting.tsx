import { Badge, Calendar } from "antd";
import meeting from "../assets/meeting.json";

export function Meeting() {
  const MeetingItem = (props: { title: string; time: string }) => {
    return (
      <tr>
        <td className="border border-1">
          <span className="title"></span>
          <strong>{props.title}</strong>&nbsp;
        </td>
        <td className="border border-1">
          <span>{props.time}</span>
        </td>
      </tr>
    );
  };

  return (
    <div className="news">
      <h4 className="text-center fw-bold">活動行事曆 Calendar</h4>
      <div className="d-none d-md-block border p-md-5 d-flex flex-row justify-content-center">
        <Calendar
          cellRender={(current) => {
            const item: { time: string; title: string } | undefined =
              meeting.find((item) => item.time == current.format("YYYY.MM.DD"));
            if (item == undefined) {
              return null;
            }
            return <Badge status="warning" text={item.title} />;
          }}
        ></Calendar>
      </div>
      <div className="d-md-none d-flex flex-column">
        <table className="table-bordered">
          {meeting.map((data) => {
            return (
              <MeetingItem title={data.title} time={data.time}></MeetingItem>
            );
          })}
        </table>
      </div>
    </div>
  );
}
