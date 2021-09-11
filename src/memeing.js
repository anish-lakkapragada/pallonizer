function getMeme(image) {
    const memes = ['https://api.memegen.link/images/aag/_/aliens.jpg',
        "https://api.memegen.link/images/ackbar/_/it's_a_trap!.jpg",
        "https://api.memegen.link/images/afraid/i_don't_know_what_this_meme_is_for/and_at_this_point_i'm_too_afraid_to_ask.jpg",
        'https://api.memegen.link/images/agnes/_/i_have_read_and_agree_to_the_terms_and_conditions.jpg',
        "https://api.memegen.link/images/aint-got-time/memes~q/ain't_nobody_got_time_fo'_that.jpg",
        "https://api.memegen.link/images/ams/when_you're_watching_a_movie/and_your_parents_walk_in_at_the_sex_scene.jpg",
        "https://api.memegen.link/images/ants/do_you_want_ants~q/because_that's_how_you_get_ants.jpg",
        'https://api.memegen.link/images/apcr.jpg',
        "https://api.memegen.link/images/atis/and_then_i_said/the_exam_will_only_contain_what_we've_covered_in_lectures.jpg",
        'https://api.memegen.link/images/away/life.../finds_a_way.jpg',
        'https://api.memegen.link/images/awesome/say_a_word_wrong/create_hilarious_inside_joke.jpg',
        'https://api.memegen.link/images/awesome-awkward/first_day_at_new_job/spill_coffee_on_bossman.jpg',
        'https://api.memegen.link/images/awkward/start_telling_joke/forget_punchline.jpg',
        'https://api.memegen.link/images/awkward-awesome/trip_guy_on_the_street/he_was_running_with_a_stolen_purse.jpg',
        'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg',
        'https://api.memegen.link/images/badchoice/milk/was_a_bad_choice.jpg',
        "https://api.memegen.link/images/bd/can't_workout/don't_want_to_get_too_buff.jpg",
        "https://api.memegen.link/images/bender/i'm_going_to_build_my_own_theme_park/with_blackjack_and_hookers.jpg",
        "https://api.memegen.link/images/bihw/it_ain't_much/but_it's_honest_work.jpg",
        'https://api.memegen.link/images/biw/gets_iced_coffee/in_the_winter.jpg',
        'https://api.memegen.link/images/blb.jpg',
        'https://api.memegen.link/images/boat/_/i_should_buy_a_boat.jpg',
        'https://api.memegen.link/images/both/_/why_not_both~q.jpg',
        'https://api.memegen.link/images/bs/what_a_surprise.../you_caught_me_again.jpg',
        'https://api.memegen.link/images/buzz/memes/memes_everywhere.jpg',
        'https://api.memegen.link/images/captain/look_at_me/i_am_the_captain_now.jpg',
        "https://api.memegen.link/images/captain-america/Have_you_ever_eaten_a_clock~q/No,_why~q/It's_time_consuming..jpg",
        'https://api.memegen.link/images/cb/i_stole/the_pic--i--nic_basket.jpg',
        'https://api.memegen.link/images/cbg/_/worst_thing_ever!.jpg',
        'https://api.memegen.link/images/center/what_is_this/a_center_for_ants.jpg',
        'https://api.memegen.link/images/ch/if_you_wanted_to_avoid_the_friend_zone/you_should_have_made_your_intentions_known_from_the_start.jpg',
        "https://api.memegen.link/images/cheems/it's_a_good_time_to_sleep/nothing_will_go_wrong_after_this.jpg",
        'https://api.memegen.link/images/chosen/you_were_the_chosen_one!.jpg',
        "https://api.memegen.link/images/cmm/pineapples_don't_belong_on_pizza.jpg",
        "https://api.memegen.link/images/crazypills/_/i_feel_like_i'm_taking_crazy_pills.jpg",
        "https://api.memegen.link/images/cryingfloor/it's_okay/lets_just_reschedule_drinking.jpg",
        'https://api.memegen.link/images/db/Socialism/The_Youth/Capitalism.jpg',
        'https://api.memegen.link/images/dg/Socialism/The_Youth/Capitalism.jpg',
        'https://api.memegen.link/images/disastergirl/what_did_you_say~q.jpg',
        "https://api.memegen.link/images/dodgson/we've_got_dodgson_here!/see~q_nobody_cares.jpg",
        'https://api.memegen.link/images/doge/such_meme/very_skill.jpg',
        'https://api.memegen.link/images/dragon/OK_I_want_a_boyfriend.jpg',
        'https://api.memegen.link/images/drake.jpg',
        'https://api.memegen.link/images/ds/The_dress_is_black_and_blue./The_dress_is_gold_and_white..jpg',
        'https://api.memegen.link/images/dsm/they_will_never_find_your_body/as_attractive_as_i_do.jpg',
        'https://api.memegen.link/images/dwight/love_is_all_you_need~q/false._you_need_water_and_rations..jpg',
        'https://api.memegen.link/images/elf/_/you_sit_on_a_throne_of_lies.jpg',
        'https://api.memegen.link/images/ermg/ermahgerd/memes.jpg',
        'https://api.memegen.link/images/fa/forever/alone.jpg',
        'https://api.memegen.link/images/facepalm.jpg',
        'https://api.memegen.link/images/fbf/paper_towel/the_plate_that_cleans_up_after_itself.jpg',
        'https://api.memegen.link/images/feelsgood.jpg',
        "https://api.memegen.link/images/fetch/stop_trying_to_make_fetch_happen/it's_not_going_to_happen.jpg",
        'https://api.memegen.link/images/fine/_/this_is_fine.jpg',
        'https://api.memegen.link/images/firsttry/_/first_try!.jpg',
        'https://api.memegen.link/images/fmr/_/fuck_me,_right~q.jpg',
        'https://api.memegen.link/images/fry/not_sure_if_trolling/or_just_stupid.jpg',
        'https://api.memegen.link/images/fwp.jpg',
        'https://api.memegen.link/images/gandalf/_/what_did_i_just_say~q.jpg',
        "https://api.memegen.link/images/gb/Who/Whom/Whom'st/Whomst'd.jpg",
        "https://api.memegen.link/images/gears/you_know_what_really_grinds_my_gears~q/when_people_post_images_of_cogs_that_don't_mesh.jpg",
        'https://api.memegen.link/images/ggg.jpg',
        'https://api.memegen.link/images/gru/Learn_how_to_make_memes./Make_a_meme./No_one_likes_it./No_one_likes_it..jpg',
        'https://api.memegen.link/images/grumpycat/i_hope_that_what_does_not_kill_you/tries_again.jpg',
        'https://api.memegen.link/images/hagrid/_/i_should_not_have_said_that.jpg',
        "https://api.memegen.link/images/happening/_/it's_happening.jpg",
        'https://api.memegen.link/images/harold/when_the_boss_sees/your_meme_tab.jpg',
        'https://api.memegen.link/images/hipster.jpg',
        'https://api.memegen.link/images/home/Me:_Can_we_stop_and_get_food~q/Mom:_We_have_food_at_home./Food_at_home:.jpg',
        'https://api.memegen.link/images/icanhas/i_can_has/this_meme~q.jpg',
        "https://api.memegen.link/images/imsorry/oh,_i'm_sorry/i_thought_this_was_america.jpg",
        'https://api.memegen.link/images/inigo/you_keep_using_that_word/i_do_not_think_it_means_what_you_think_it_means.jpg',
        'https://api.memegen.link/images/interesting.jpg',
        "https://api.memegen.link/images/ive/we_think/you'll_love_it.jpg",
        'https://api.memegen.link/images/iw/does_testing/in_production.jpg',
        'https://api.memegen.link/images/jd/disregard_females/acquire_currency.jpg',
        'https://api.memegen.link/images/jetpack/nothing_to_do_here.jpg',
        "https://api.memegen.link/images/joker/it's_simple/kill_the_batman.jpg",
        'https://api.memegen.link/images/jw/you_just_went_and_made_a_new_dinosaur~q/probably_not_a_good_idea.jpg',
        'https://api.memegen.link/images/keanu.jpg',
        "https://api.memegen.link/images/kermit/_/but_that's_none_of_my_business.jpg",
        'https://api.memegen.link/images/kk/they_broke_my_pencils/i_broke_their_neck.jpg',
        'https://api.memegen.link/images/kombucha/Trying_a_thing./Trying_a_thing_again..jpg',
        'https://api.memegen.link/images/leo.jpg',
        'https://api.memegen.link/images/live/_/do_it_live!.jpg',
        'https://api.memegen.link/images/ll/_/hhhehehe.jpg',
        'https://api.memegen.link/images/lrv/do_the_laundry_they_said/it_will_be_fun_they_said.jpg',
        "https://api.memegen.link/images/mb/'member/star_wars~q.jpg",
        'https://api.memegen.link/images/michael-scott/no,_god!_no_god_please_no!/noooooooooooooooo!.jpg',
        "https://api.memegen.link/images/millers/_/You_are_making_500_thousand_dollars_and_you_were_only_gonna_pay_me_30~q/You're_getting_30_grand~q_I'm_getting_a_thousand!/You_guys_are_getting_paid~q.jpg",
        'https://api.memegen.link/images/mini-keanu/your_text/goes_here.jpg',
        'https://api.memegen.link/images/mmm.jpg',
        'https://api.memegen.link/images/money/shut_up_and/take_my_money!.jpg',
        'https://api.memegen.link/images/mordor/one_does_not_simply/walk_into_mordor.jpg',
        'https://api.memegen.link/images/morpheus.jpg',
        'https://api.memegen.link/images/mouth/Sales_Team_presenting_the_solution_in_PowerPoint/Excited_Customer/Engineering_Team_knowing_the_solution_is_not_technically_possible.jpg',
        "https://api.memegen.link/images/mw/you're_gonna_like_the_way_you_look/i_guarantee_it.jpg",
        "https://api.memegen.link/images/nice/_/so_i_got_that_goin'_for_me,_which_is_nice.jpg",
        "https://api.memegen.link/images/noidea/i_have_no_idea/what_i'm_doing.jpg",
        'https://api.memegen.link/images/ntot/Pls_throw~q~q/NO_TAKE!!/ONLY_THROW.jpg',
        'https://api.memegen.link/images/oag/i_know_you_received_my_email/because_i_checked_your_inbox.jpg',
        "https://api.memegen.link/images/officespace/yeah.../that'd_be_great.jpg",
        "https://api.memegen.link/images/older/it's_an_older_meme_sir/but_it_checks_out.jpg",
        'https://api.memegen.link/images/oprah/you_get_a_meme/and_you_get_a_meme.jpg',
        'https://api.memegen.link/images/patrick/why_dont_we_take_all_the_memes/and_put_them_on_memegen.jpg',
        'https://api.memegen.link/images/persian.jpg',
        'https://api.memegen.link/images/philosoraptor.jpg',
        'https://api.memegen.link/images/pigeon/Engineer/PowerPoint/Is_this_Photoshop~q.jpg',
        'https://api.memegen.link/images/ptj/Cast_it/Cast_it/into/into/the_fire/the_fire/Cast_it_into_the_fire./Keep_the_Ring_of_Power!.jpg',
        'https://api.memegen.link/images/puffin.jpg',
        "https://api.memegen.link/images/red/oh,_is_that_what_we're_going_to_do_today~q/we're_going_to_fight~q.jpg",
        'https://api.memegen.link/images/regret/_/i_immediately_regret_this_decision.jpg',
        'https://api.memegen.link/images/remembers/remember_this_meme~q/pepperidge_farm_remembers.jpg',
        "https://api.memegen.link/images/reveal/Villain/Let's_see_who_you_really_are.../Protaganist/I_knew_it!.jpg",
        'https://api.memegen.link/images/right/Senior_Developer/Junior_Developer/Put_it_in_the_backlog./So_we_can_fix_it_later,_right~q/So_we_can_fix_it_later,_right~q.jpg',
        "https://api.memegen.link/images/rollsafe/can't_get_fired/if_you_don't_have_a_job.jpg",
        "https://api.memegen.link/images/sad-biden/sad_joe_biden/doesn't_think_you'll_vote.jpg",
        "https://api.memegen.link/images/sad-boehner/sad_john_boehner/doesn't_think_you'll_vote.jpg",
        "https://api.memegen.link/images/sad-bush/sad_george_bush/doesn't_think_you'll_vote.jpg",
        "https://api.memegen.link/images/sad-clinton/sad_bill_clinton/doesn't_think_you'll_vote.jpg",
        "https://api.memegen.link/images/sad-obama/sad_barack_obama/doesn't_think_you'll_vote.jpg",
        'https://api.memegen.link/images/sadfrog/_/feels_bad_man.jpg',
        'https://api.memegen.link/images/saltbae.jpg',
        'https://api.memegen.link/images/same/π/3/The_Bible.jpg',
        "https://api.memegen.link/images/sarcasticbear/i'm_so_sorry/i_haven't_memorized_the_internet.jpg",
        'https://api.memegen.link/images/sb/remembers_the_face/but_not_the_name.jpg',
        'https://api.memegen.link/images/scc.jpg',
        'https://api.memegen.link/images/sf/i_accidentally_used_a_swear_word/and_i_know_my_mom_heard_it_from_the_other_room.jpg',
        'https://api.memegen.link/images/sk/you_finished_your_plate/because_i_was_starving~q.jpg',
        "https://api.memegen.link/images/ski/_/you're_gonna_have_a_bad_time.jpg",
        'https://api.memegen.link/images/snek/when_you_already_checked_that_one_leaf/and_it_starts_moving.jpg',
        'https://api.memegen.link/images/soa/first_wipe/clean_toiletpaper.jpg',
        'https://api.memegen.link/images/sohappy/if_i_could_use_this_meme/i_would_be_so_happy.jpg',
        'https://api.memegen.link/images/sohot/this_meme_is/so_hot_right_now.jpg',
        'https://api.memegen.link/images/soup-nazi/no_soup_for_you!.jpg',
        'https://api.memegen.link/images/sparta/this._is./sparta!.jpg',
        'https://api.memegen.link/images/spiderman/me_pointing_at_you/you_pointing_at_me.jpg',
        "https://api.memegen.link/images/spongebob/BF:_I_don't_even_know_her_like_that/Me:_i_DoN'T_eVeN_KnOw_HeR_lIkE_tHaT.jpg",
        'https://api.memegen.link/images/ss/needs_a_place_to_crash/never_leaves.jpg',
        "https://api.memegen.link/images/stew/_/baby,_you've_got_a_stew_going!.jpg",
        'https://api.memegen.link/images/stonks/_/stonks.jpg',
        'https://api.memegen.link/images/stop-it/stop_it/get_some_help.jpg',
        "https://api.memegen.link/images/success/don't_know_a_question_on_the_test/answer_is_in_another_question.jpg",
        'https://api.memegen.link/images/tenguy.jpg',
        'https://api.memegen.link/images/toohigh/the_rent_is/too_damn_high.jpg',
        'https://api.memegen.link/images/tried/at_least/you_tried.jpg',
        'https://api.memegen.link/images/trump/this_is_the_best_meme_in_the_history_of_memes/maybe_ever.jpg',
        'https://api.memegen.link/images/ugandanknuck.jpg',
        'https://api.memegen.link/images/whatyear/_/what_year_is_it~q.jpg',
        'https://api.memegen.link/images/winter/prepare_yourself/winter_is_coming.jpg',
        'https://api.memegen.link/images/wkh/Twin_Towers/George_Bush/Why_would_Al--Qaeda_do_this~q.jpg',
        'https://api.memegen.link/images/wonka.jpg',
        'https://api.memegen.link/images/worst/This_is_the_worst_day_of_my_life./This_is_the_worst_day_of_your_life_so_far..jpg',
        'https://api.memegen.link/images/xy/all_the_things!!!.jpg',
        "https://api.memegen.link/images/yallgot/y'all_got_any_more_of_them/memes.jpg",
        'https://api.memegen.link/images/yodawg/yo_dawg/i_heard_you_like_memes.jpg',
        'https://api.memegen.link/images/yuno/y_u_no/use_this_meme!~q.jpg',
        'https://api.memegen.link/images/zero-wing/all_your_base_are_belong_to_us.jpg'];

    return memes[Math.floor(Math.random() * memes.length)] + "?" + "height=" + image.height + "&width=" + image.width;
}

let numChanged = 0; let ALLOWED; 

async function update(newValue) {
    // update the chrome storage and wait until it is updated. 
    await new Promise((resolve, reject) => {
        chrome.storage.sync.set({"memeTime":newValue}, () => {
            resolve(); 
        }); 
    }); 
}

// get the value of ALLOWED from the chrome storage.

(async () => {
    await new Promise((resolve, reject) => {
        chrome.storage.sync.get(['memeTime'], (result) => {
            ALLOWED = result.memeTime;
            console.log("we got it"); 
            console.log(ALLOWED);
            if (ALLOWED == undefined) {
                update(false); 
            }

            resolve();
        }); 
    }); 
})(); 


function run(images) {
    if (!ALLOWED) {
        console.log("ALLOWED is false, rbeaking out"); 
        return; 
    }
    for (let i = 0; i < images.length; i++) {
        if (images[i].hasAttribute("added")) { continue; }

        // has src 
        if (images[i].hasAttribute("src")) {
            images[i].setAttribute('src', getMeme(images[i]));
            images[i].setAttribute("added", true);
            numChanged++;
        }

        // no src
        else {
            images[i].setAttribute('src', getMeme(images[i]));
            images[i].setAttribute("added", true);
            numChanged++;
        }

        // remove all the weird stuff 
        const attributes = images[i].attributes;
        for (let j = 0; j < attributes.length; j++) {
            if (attributes[j].name.substring(0, 4) === "data") {
                images[i].removeAttribute(attributes[j].name);
            }

            if (attributes[j].name === "srcset") {
                images[i].removeAttribute(attributes[j].name)
            }
        }

        console.log(`num used: ${numChanged}`);
    }
}


const onUpdate = (oldValue, newValue) => {

    console.log('inside onUpdate', newValue);

    if (newValue == true) {
        console.log("we should be in here"); 
        //re-run for fun 
        const changeObjects = ['img', 'source', 'video', 'iframe'];
        for (let o = 0; o < changeObjects.length; o++) {
            let objects = document.getElementsByTagName(changeObjects[o]);
            run(objects);
        }
    }

    else {
        // if it's not allowed, then we need to rewrite everything on the page right? 
        // honestly we can just reload the page here 
        
        window.location.reload();
    }
}
// detect when the value of memeTime in chrome storage has changed. 
chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log("we got a change");
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        // check if key is memeTime 
        if (key === "memeTime") {
            console.log("we in here dawg"); 
            console.log(oldValue, newValue);
            
            ALLOWED = newValue;

            onUpdate(oldValue, newValue);
        }
    }
});

document.addEventListener("DOMNodeInserted", (event) => {
    console.log(`This is allowed ${ALLOWED}`);

    if (ALLOWED) {
        console.log(`Allowed is this ${ALLOWED} and we are running`); 
        const changeObjects = ['img', 'source', 'video', 'iframe'];
        for (let o = 0; o < changeObjects.length; o++) {
            let objects = document.getElementsByTagName(changeObjects[o]);
            run(objects);
        }
    }
})

