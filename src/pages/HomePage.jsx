import { Heart, HeartPulse, Search, Soup, Sparkle } from 'lucide-react'
import React from 'react'
import UserCard from '../components/UserCard'

const HomePage = () => {
  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        

        <h1 className=' flex items-center gap-5 font-bold w-full text-3xl md:text-5xl mt-4'>
          Tech's around you <Sparkle className='fill-orange-500 text-orange-500'/>
        </h1>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>
          Popular choices
        </p>


        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        {/*1st user */}

        <a href="https://www.fiverr.com/omar_ahdt/setup-aws-cloud-expert-infrastructure-for-your-project?context_referrer=search_gigs&source=main_banner&ref_ctx_id=36224742aaad434bb0e019edf0c3b37e&pckg_id=1&pos=3&context_type=auto&funnel=36224742aaad434bb0e019edf0c3b37e&imp_id=66811106-9784-4ac4-a958-ca697ca7b4b6" target='_blank'>
        <UserCard title="AWS Engineer" exp="0-2 yrs" sup="3 works" img="images/aws.jpg"/>
        </a>

        <a href="https://www.fiverr.com/igorstojanov405/create-fungible-token-nft-token-and-dapp-on-hedera?context_referrer=search_gigs&source=main_banner&ref_ctx_id=7a72813b82a944f59d299744a9c8e7f5&pckg_id=1&pos=1&context_type=auto&funnel=7a72813b82a944f59d299744a9c8e7f5&fiverr_choice=true&imp_id=c3ca675e-272f-42e5-a16a-2317f07a5d8b" target='_blank'>
        <UserCard title="Blockchain Engineer" exp="0-1 yrs" sup="5 works" img="images/Blockchain.png"/>
        </a>

        <a href="https://www.fiverr.com/koushikthota/guide-or-teach-you-data-engineering?context_referrer=search_gigs&source=main_banner&ref_ctx_id=d1b94cf1614e406daecd602c0ba624ed&pckg_id=1&pos=1&context_type=auto&funnel=d1b94cf1614e406daecd602c0ba624ed&fiverr_choice=true&imp_id=4f09cd21-2561-49f3-b2b6-a7891df7880c" target='_blank'>
        <UserCard title="Data Engineer" exp="3-6 yrs" sup="6 works" img="images/Data.png"/>
        </a>

        <a href="https://www.fiverr.com/kunalkhurana401/your-full-stack-developer-for-website-development-using-php-laravel-html-css?context_referrer=search_gigs&source=main_banner&ref_ctx_id=9189c53957f94a119b79affa5449811c&pckg_id=1&pos=2&context_type=auto&funnel=9189c53957f94a119b79affa5449811c&imp_id=268a9d9b-214a-48f4-9127-c3720eb702eb" target='_blank'>
        <UserCard title="Full stack Developer" exp="0-9 yrs" sup="2 works" img="images/FullStack.png"/>
        </a>

        <a href="https://www.fiverr.com/mmohsin480/do-data-science-projects-using-python?context_referrer=search_gigs&source=top-bar&ref_ctx_id=fd4dbc780bb5490aa605123b9e1b1a4a&pckg_id=1&pos=1&context_type=auto&funnel=fd4dbc780bb5490aa605123b9e1b1a4a&imp_id=6fa9f6ee-1a50-4d58-a8e1-e44035d6366d" target='_blank'>
        <UserCard title="Computer Analyst" exp="2-5 yrs" sup="7 works" img="images/computer.png"/>
        </a>

        <a href="https://www.fiverr.com/search/gigs?query=database%20administer&source=top-bar&ref_ctx_id=fd4dbc780bb5490aa605123b9e1b1a4a&search_in=everywhere&search-autocomplete-original-term=database%20administer" target='_blank'>
        <UserCard title="Database Administrator" exp="5-8 yrs" sup="8 works" img="images/database.jpg"/>
        </a>

          <a href="https://www.fiverr.com/aasimrazajatoi/provide-devops-and-cloud-services?context_referrer=search_gigs&source=top-bar&ref_ctx_id=d9639087d3574c5b9113dbf804070e57&pckg_id=1&pos=3&context_type=auto&funnel=d9639087d3574c5b9113dbf804070e57&seller_online=true&imp_id=71bf42e3-ef6b-4f9d-aa11-1abd1245890c" target='_blank'>
          <UserCard title="Azure Devops Manager" exp="5-10 yrs" sup="10 works" img="images/azure.png"/>

          </a>

          <a href="https://www.fiverr.com/the_niyal/design-interactive-landing-page-for-your-website?context_referrer=search_gigs_with_recommendations_row_1&source=recommendation_ftb_friendly&ref_ctx_id=78735e31a0a64067b0a088edfc6ab320&context=recommendations&pckg_id=1&pos=1&context_type=auto&funnel=78735e31a0a64067b0a088edfc6ab320&imp_id=74dff284-7fb5-4b9a-aa4b-db8e921fd671" target='_blank'>
          <UserCard title="User experience design" exp="1-4 yrs" sup="2 works" img="images/ux-ui.jpg"/>

          </a>

          <a href="https://www.fiverr.com/itstalmeez/expert-machine-learning-engineer-for-your-data-driven-success?context_referrer=search_gigs&source=top-bar&ref_ctx_id=0c09bc1cc3af4662be8d813c188e4151&pckg_id=1&pos=1&context_type=auto&funnel=0c09bc1cc3af4662be8d813c188e4151&imp_id=7551f883-3b6c-41ff-9a9e-6890c707ee62" target='_blank'>
          <UserCard title="ML Engineer" exp="3-7 yrs" sup="4 works" img="images/ML.jpg"/>
          
          </a>


          <a href="https://www.fiverr.com/shary_consult/be-your-aws-solutions-architect-and-cloud-consultant?context_referrer=search_gigs&source=top-bar&ref_ctx_id=445fcec762b84c3393862fe686a2e369&pckg_id=1&pos=3&context_type=auto&funnel=445fcec762b84c3393862fe686a2e369&seller_online=true&imp_id=0afeb66d-dd30-4c45-9482-375e4daa6826" target='_blank'>
          <UserCard title="Cloud Architect" exp="4-6 yrs" sup="7 works" img="images/CloudArchitect.jpg"/>

          </a>

        </div>

      </div>
      
    </div>
  )
}

export default HomePage
