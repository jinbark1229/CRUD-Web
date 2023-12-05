import { Link } from "react-router-dom";
function NoteBoard(){


  return(
    <div className="notice">
      이 곳은 게시판이 들어갈 자리 입니다       <Link to="Board">+더보기</Link>
    </div>
  )

}

export default NoteBoard;