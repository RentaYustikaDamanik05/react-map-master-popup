// import React from "react";

// import { AsyncTypeahead } from "react-bootstrap-typeahead";
// import "react-bootstrap-typeahead/css/Typeahead.css";
// import { textAlign } from "@material-ui/system";
// import zIndex from "@material-ui/core/styles/zIndex";

// export default class EngineSearch extends React.Component {
//   state = {
//     isLoading: false,
//     options: [],
//     query: "",
//     page: 1
//   };

//   componentDidMount() {
//     this.fetchTodos();
//   }

//   fetchTodos = (page = 1) => {
//     fetch('http://forclime.agrisoft-cb.com:5002/data/basemap_da')
//       .then(response => response.json())
//       .then(json => {
//         console.log("Fetched todos: ", json);
//         this.setState({ options: json });
//       });
//   };

//   render() {
//     return (
//       <div style={{
      
//     textAlign:"center",
//     zIndex:"9999px"
      
//       }} >
//         <AsyncTypeahead
//           query={this.state.query}
//           emptyLabel="No todos found"
//           highlightOnlyResult
//           id="todos"
//           isLoading={this.state.isLoading}
//           labelKey="title"
//           maxResults={10}
//           options={this.state.options}
//           paginate
//           paginationText="Load more"
//           placeholder="Select a todo"
//           useCache={false}
//           onSearch={() => {
//             this.fetchTodos();
//           }}
//           onPaginate={() => {
//             const page = this.state.page + 1;
//             this.fetchTodos(page);
//           }}
//           onInputChange={query => this.setState({ query })}
//         />
//       </div>
//     );
//   }
// }
