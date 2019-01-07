import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Post from './post';

//component to fetch list of posts as the main page or for specific category
class Main extends Component{
    state = {filter:'new'}
   handleViewPost = (e)=>{
       e.preventDefault();
   }
   handleSelectOrderPost = (e)=>{
     this.setState({
         filter:e.target.value
     })
   }
   componentDidMount(){
       let {categoryId} = this.props.match.params;
       if(categoryId){
           this.props.getPostsByCat(categoryId)
       }else{
        this.props.getAllPosts()
       }
    
   }
   

   renderPosts = function  (filter,posts){
        switch (filter) {
            case 'new':
              return  _.orderBy(posts,['timestamp'],['desc']).map(post=>{
                return <Post post={post} editable={false}/>
            })
             case 'old':
             return  _.orderBy(posts,['timestamp'],['asc']).map(post=>{
                return <Post post={post} editable={false}/>
            })
            case 'alphabetic':
            return  _.orderBy(posts,['title'],['asc']).map(post=>{
               return <Post post={post} editable={false}/>
           })
            default:
            return  _.orderBy(posts,['title'],['asc']).map(post=>{
                return <Post post={post} editable={false}/>
            })
        }
   }
  render(){
      const {posts}  = this.props;
      const {filter} = this.state;
      const {categoryId} = this.props.match.params;
       
      return (
          <div className="container">

                <div className="posts tc pt7">
                    <h3>Posts </h3>
                    {categoryId && (<p><strong>Category</strong> : {categoryId}</p>)}
                     <select
                    onChange={this.handleSelectOrderPost} className="dib cf">
                    <option key="new" value="new">Newest</option>
                    <option key="old" value="old">Oldest</option>
                    <option key="alphabetic" value="alphabetic">(A to Z)</option>
                    </select>
                    
                   
                    {
                     this.renderPosts(filter,posts)
                        
                       }
                </div>
              
          </div>
      )
  }

}



function mapStateToProps({categories,posts}){
    return {
       categories,
       posts:posts!=='no posts' ? _.values(posts) : []
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getAllPosts: () => {
        dispatch({type:'GET_ALL_POSTS'})
      },
      getPostsByCat: (categoryId)=>{
        dispatch({type:'GET_POSTS_BY_CAT',categoryID:categoryId})
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Main);