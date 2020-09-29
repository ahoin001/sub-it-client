import React, { useState } from 'react';
import axios from 'axios';

// class ShowSubtitles extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       subtitles: []
//     }
//   }

//   componentDidMount() {
//     let thisProjectId = this.props.projectId;
//     axios.get(`http://localhost:8000/projects/api/subtitles/${thisProjectId}`)
//       .then((response) => {
//         this.setState({ subtitles: response.data.subArray });
//         this.listSubtitles();
//       })
//       .catch((err) => { })
//   }

//   listSubtitles = () => {
//     let subtitleList = document.getElementById('subtitle-list');
//     let projectSubtitles = this.state.subtitles;
//     projectSubtitles.map((sub) => {
//       subtitleList.innerHTML += `<li>${sub.text}</li><br>`;
//     })
//     console.log(subtitleList.innerHTML);
//   }

//   render() {
//     return (
//       <div id='show-subtitles'>
//         Subtitles:
//         <ul id='subtitle-list'>
//         </ul>

//         {/* <table class="table table-hover table-dark">
//    <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   </table> */}

//       </div>
//     );
//   }

// }

// export default ShowSubtitles;


const ShowSubtitles = () => {

  const [subtitles, setSubtitles] = useState([])

  useEffect(() => {

    //     if (!this.props.theUser) {
    //         this.props.history.push('/login')
    // return;
    //     }
    //     console.log("this is the did mount and the props ========= ", this.props)

    const fetchData = async () => {

      const userId = localStorage.getItem('currentUserId');

      // * Get Projects that belong to signed in user
      let thisProjectId = this.props.projectId;
      axios.get(`http://localhost:8000/projects/api/subtitles/${thisProjectId}`)
        .then((response) => {
          this.setState({ subtitles: response.data.subArray });
          this.listSubtitles();
        })
        .catch((err) => { })

    }

    fetchData();

  }, [])

  const listSubtitles = () => {
    let subtitleList = document.getElementById('subtitle-list');
    let projectSubtitles = this.state.subtitles;
    projectSubtitles.map((sub) => {
      subtitleList.innerHTML += `<li>${sub.text}</li><br>`;
    })
    console.log(subtitleList.innerHTML);
  }

  return (

    <div id='show-subtitles'>
      Subtitles:

      <ul id='subtitle-list'>
      </ul>

    </div>
  );

};

export default ShowSubtitles;