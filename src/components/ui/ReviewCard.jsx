import React from 'react';
import RatingStars from './RatingStars';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const ReviewCard = ({ review }) => (
  <div className="rounded-lg border border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark p-6">
    <div className="flex items-start gap-4">
      <div 
        className="size-10 flex-shrink-0 rounded-full bg-cover bg-center" 
        style={{ backgroundImage: `url("${review.avatar}")` }}
      ></div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-black dark:text-white">{review.user}</p>
            <p className="text-xs text-black/60 dark:text-white/60">{review.date}</p>
          </div>
          <RatingStars rating={review.rating} iconSize={16} />
        </div>
        <p className="mt-3 text-sm text-black/80 dark:text-white/80">{review.text}</p>
        <div className="mt-4 flex items-center gap-6 text-sm text-black/60 dark:text-white/60">
          <button className="flex items-center gap-2 transition-colors hover:text-primary">
            <ThumbsUp className="h-4 w-4" /> {review.likes}
          </button>
          <button className="flex items-center gap-2 transition-colors hover:text-primary">
            <ThumbsDown className="h-4 w-4" /> {review.dislikes}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewCard;