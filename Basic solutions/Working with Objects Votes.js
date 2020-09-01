function getVoteCount(votes) {
	return votes.upvotes-votes.downvotes
	
}
console.log(getVoteCount({ upvotes: 3, downvotes: 33 }));

//op:  -30