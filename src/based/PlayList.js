/**
 * @module PlayList
 * @todo put this playlist in the tag ---> <main className="flex-1 p-6"> <PlayList/> </main> (for example)
 * @param {name} - name of the playlist
 * @param {description} - description of the playlist
 *
 */

export const PlayList = (props) => {
   console.log('props', props);
   return (
      <main className="flex-1 p-6 ">
         {props.playList &&
            props.playList.length > 0 &&
            props.playList.map((item, index) => {
               return (
                  <div className="grid gap-6 mb-10">
                     <div class="flex items-center justify-between">
                        <div class="space-y-1">
                           <h2 class="text-2xl font-semibold tracking-tight">{item.name}</h2>
                           <p class="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                     </div>
                     <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full "></div>
                     <div style={{ overflowX: 'scroll' }} className="h-full w-full rounded-[inherit]">
                        <div style={{ minWidth: '100%', display: 'flex' }} className="flex space-x-4 pb-4">
                           {item.videos.map((video, index) => {
                              return (
                                 <div className="item space-y-3">
                                    <div className=" w-[250px]">
                                       <span data-state="closed">
                                          <div className="overflow-hidden rounded-md">
                                             <img
                                                onClick={() => props.handlePlay(video)}
                                                alt="React Rendezvous"
                                                loading="lazy"
                                                width="250"
                                                height="330"
                                                src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75"
                                                decoding="async"
                                                data-nimg="1"
                                                className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4] cursor-pointer"
                                             ></img>
                                          </div>
                                       </span>
                                    </div>
                                    <div class="space-y-1 text-sm">
                                       <h3 class="font-medium leading-none">{video.name}</h3>
                                       <p class="text-xs text-muted-foreground">Thời gian phát: {video.time}</p>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               );
            })}
      </main>
   );
};
