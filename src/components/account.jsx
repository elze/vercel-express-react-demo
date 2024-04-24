import supabase from "../utils/supabase";
import React from "react";
import ReactDOM from 'react-dom';
import Expire from './Expire.jsx';



export default function Account() {
    var ref = useRef({});
    var [ state, setState ] = React.useState(false);
    var [ session, setSession ] = React.useState({});
    async function Update({ refs, setState, }) {
        var { data, error } = await supabase.auth.updateUser({
            data: {
                 $$vix__username: refs.username,
            }
        });
            if (!error) return setState(true);
            return;
    }

    return (
        <div id="select-modal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
  <div class="relative max-h-full w-full max-w-md p-4">
    <div class="relative rounded-lg bg-[rgb(49,_51,_56)] shadow dark:bg-gray-700">
      <div class="flex items-center justify-between rounded-t p-4 md:p-5">
        <h1 class="ml-auto font-['Noto_sans'] text-[24px] font-semibold text-[rgb(242_243_245)]">Finish your account</h1>
        <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <div class="p-4 md:p-5 relative">
        <p class="mb-4 text-justify font-['Noto_Sans'] font-bold text-[rgb(181,_186_193)]">Choose how you want to finish your account</p>
        <ul class="mb-4 space-y-4 relative">
          <li class="relative">
            <input type="radio" id="job-1" name="job" value="job-1" class="hidden peer" required />
            <label for="job-1" class="inline-flex w-full cursor-pointer items-center justify-between rounded-[8px] border border-[rgb(78,80,_88,_.48)] bg-[rgb(78,80,_88,_.3)] p-5 text-gray-900 hover:bg-[rgb(78,80,_88)] hover:text-gray-900 peer-checked:border-blue-600  dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:hover:text-gray-300 peer-checked:[&_.e]:!hidden peer-checked:[&_.f]:!hidden peer-checked:[&_.e]!hidden peer-checked:[&_.g]:!flex peer-checked:[&_.arrow-end]:!hidden peer-checked:[&_.arrow-justify]:!absolute [&_.arrow-justify]:top-0 [&_.arrow-justify]:z-10 [&_.arrow-justify]:left-[83.5%] has-[#radio:checked]:[&_.g]:!hidden">
              <div class="block relative">
                <div class="w-full font-['Noto_Sans'] e text-lg font-semibold text-[rgb(219_222_225)]">Change username</div>
                <div class="w-full text-gray-500 f  dark:text-gray-400">{session}</div>
      <div class="hidden items-center border-b g border-[#999ead7a]">
    <input class="appearance-none bg-transparent border-none w-full text-[rgb(181,186,193)] mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value="Aka, but nice" aria-label="Full name" />
    <button class="flex-shrink-0 font-['Noto_Sans'] border-transparent border-4 hover:underline text-blue-600 text-sm py-1 px-2 rounded" type="button">
      Save
    </button>
    <button for="cancel" class=" flex-shrink-0 font-['Noto_Sans'] border-transparent border-4 hover:underline text-blue-600 text-sm py-1 px-2 rounded" type="button">
      Cancel
    </button>
  </div>
                
              </div>
              <svg class="ms-3 h-4 w-4 text-[#4f5660] arrow-end rtl:rotate-180 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
            </label>
          </li>
          <li>
            <input type="radio" id="job-2" name="job" value="job-2" class="peer hidden" />
            <label for="job-2" class="inline-flex w-full cursor-pointer items-center justify-between rounded-[8px] border border-[rgb(78,80,_88,_.48)] bg-[rgb(78,80,_88,_.3)] p-5 text-gray-900 hover:bg-[rgb(78,80,_88)] hover:text-gray-900 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:hover:text-gray-300 dark:peer-checked:text-blue-500">
              <div class="block">
                <div class="w-full font-['Noto_Sans'] text-lg font-semibold text-[rgb(219_222_225)]">Preupdate Vixcord Status</div>
                <div class="w-full text-gray-500 dark:text-gray-400">Custom status</div>
              </div>
              <svg class="ms-3 h-4 w-4 text-[#4f5660] rtl:rotate-180 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
            </label>
          </li>
          <li>
            <input type="radio" id="job-3" name="job" value="job-3" class="peer hidden" />
            <label for="job-3" class="inline-flex w-full cursor-pointer items-center justify-between rounded-[8px] border border-[rgb(78,80,_88,_.48)] bg-[rgb(78,80,_88,_.3)] p-5 text-gray-900 hover:bg-[rgb(78,80,_88)] peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-gray-600 dark:text-white dark:peer-checked:text-blue-500">
              <div class="block">
                <div class="w-full font-['Noto_Sans'] text-lg font-semibold text-[rgb(219_222_225)]">r</div>
                <div class="w-full text-gray-500 dark:text-gray-400">Flowbite</div>
              </div>
              <svg class="ms-3 h-4 w-4 text-[#4f5660] rtl:rotate-180 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
            </label>
          </li>
        </ul>
        <button class="w-full rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400">Next step</button>
      </div>
    </div>
  </div>
</div>

    )
}