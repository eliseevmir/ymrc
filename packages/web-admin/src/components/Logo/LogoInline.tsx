import * as React from 'react';

export interface LogoInlineProps extends React.SVGProps<SVGSVGElement> {
  readonly variant: 'inline';
  readonly color?: string;
}

const LogoInline: React.ForwardRefRenderFunction<SVGSVGElement, LogoInlineProps> = (props, ref) => {
  const { className, color } = props;
  const fill = typeof color === 'string' ? color : 'currentColor';

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 97 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fill}
        d="M61.826 1.05c-.049.671-.175 1.466-.39 2.384A37.63 37.63 0 0160.6 6.34a42.42 42.42 0 00-1.548 1.646 40.493 40.493 0 00-1.431 1.75 29.793 29.793 0 00-1.266 1.77c-.4.596-.759 1.173-1.07 1.741a21.63 21.63 0 00-.848 1.618c-.233.51-.418.984-.555 1.42a1.28 1.28 0 00-.038.387c0 .133.029.246.078.34.029.039.067.095.126.2.068.094.146.198.243.321.088.123.195.256.312.388.107.133.224.265.34.379.108.113.224.198.331.274a.555.555 0 00.283.094c.214-.019.39-.056.526-.094.146-.047.263-.104.37-.151.39-.209.788-.559 1.217-1.022.418-.483.837-1.041 1.256-1.684.418-.644.837-1.363 1.246-2.139.399-.776.788-1.58 1.158-2.412.38-.824.73-1.657 1.052-2.49.311-.832.594-1.627.837-2.374a27.11 27.11 0 011.363-1.107c.448-.34.876-.643 1.285-.899a9.532 9.532 0 011.188-.652c.37-.17.71-.294 1.022-.36a.655.655 0 01.273 0 .35.35 0 01.185.104.606.606 0 01.107.19c.02.065.03.141.03.198 0 .483-.147 1.003-.43 1.56-.282.559-.68 1.108-1.206 1.657-.526.549-1.169 1.069-1.918 1.57a13.22 13.22 0 01-2.551 1.278c.117.132.243.284.37.435.136.161.263.322.38.473.136.16.253.313.36.464.107.142.204.265.272.369.448-.17.906-.398 1.373-.681.467-.284.925-.616 1.363-.985.438-.369.847-.766 1.237-1.192.389-.435.73-.88 1.022-1.343.292-.474.525-.956.69-1.438a4.27 4.27 0 00.254-1.41V4.39a.908.908 0 00-.117-.35 3.367 3.367 0 00-.272-.445 4.557 4.557 0 00-.828-.88 2.562 2.562 0 00-.448-.312.897.897 0 00-.409-.114c-.613 0-1.236.123-1.888.35-.643.237-1.295.568-1.967.984.03-.132.059-.245.078-.359.02-.113.039-.227.048-.34a4.71 4.71 0 00-.35-.455 4.24 4.24 0 00-.506-.52c-.185-.18-.4-.35-.643-.511a3.176 3.176 0 00-.76-.388zm26.442 1.362c-.886.227-1.733.72-2.531 1.476-.818.767-1.606 1.77-2.375 3.037-.78 1.25-1.539 2.745-2.298 4.457-.345.779-.691 1.606-1.038 2.47a3.52 3.52 0 01-.803.577c-.34.17-.71.274-1.11.302.166-.274.312-.548.41-.822.107-.275.156-.559.156-.833a1.56 1.56 0 00-.156-.246c-.078-.114-.176-.237-.283-.379-.116-.132-.224-.274-.33-.407a8.095 8.095 0 00-.264-.312l-.058.057a3.416 3.416 0 00-.438.482c-.136.17-.244.331-.341.473a3.34 3.34 0 00-.282.511 1.86 1.86 0 00-.224.606c-.03.18-.049.331-.049.464a.8.8 0 00.01.141c0 .057.01.123.02.19a6.545 6.545 0 01-.79.899c-.243.227-.447.35-.603.35-.146 0-.214-.095-.214-.293 0-.228.058-.559.185-.975.127-.426.37-.899.73-1.42.234-.35.458-.633.653-.851a5.02 5.02 0 01.516-.501c.146-.114.262-.199.35-.246.087-.047.136-.086.146-.114 0-.029-.03-.085-.088-.161a1.318 1.318 0 00-.224-.246 1.699 1.699 0 00-.291-.227.525.525 0 00-.517-.066 5.02 5.02 0 00-1.597.738c-.447.322-.817.69-1.1 1.107-.291.426-.496.88-.632 1.363a6.24 6.24 0 00-.096.388c-.029.023-.05.042-.08.065-.184.161-.389.322-.583.483-.215.16-.41.312-.595.445-.194.132-.36.246-.506.322-.146.085-.253.132-.321.132-.049 0-.068-.019-.068-.057 0-.113.048-.293.126-.539.088-.255.185-.54.302-.842.127-.313.244-.625.38-.947a28.4 28.4 0 00.321-.86.283.283 0 00-.01-.199c-.02-.085-.077-.142-.155-.199-.244-.17-.497-.34-.76-.51a14.675 14.675 0 00-.75-.465c-.272-.17-.535-.312-.788-.444-.01-.151-.02-.274-.02-.378-.01-.104-.02-.171-.02-.2a.394.394 0 00-.145-.132.95.95 0 00-.234-.142 1.842 1.842 0 00-.243-.113c-.078-.028-.127-.048-.136-.048-.02 0-.059.039-.137.124-.068.075-.146.18-.243.312-.088.132-.185.274-.282.425-.098.161-.195.313-.283.464a4.302 4.302 0 00-.214.426 1.033 1.033 0 00-.078.303c0 .066.02.113.058.132.078.057.186.133.293.208.097.076.204.152.34.237.127.085.282.18.448.274-.234.237-.467.464-.71.691-.244.227-.448.426-.624.586l.478.474c.107-.095.224-.209.36-.322.136-.114.263-.236.399-.36.127-.113.263-.245.39-.369.126-.113.243-.236.35-.34.078.037.146.076.224.114.068.037.146.075.224.103-.03.076-.079.18-.147.322a7.576 7.576 0 00-.233.55c-.078.236-.175.51-.273.832-.097.322-.194.7-.302 1.125 0 .123.05.237.147.36.107.123.224.236.36.331.146.104.292.19.438.256.156.066.282.094.38.094.155 0 .34-.047.564-.151.224-.104.468-.237.73-.407.263-.17.526-.35.809-.568.242-.185.475-.376.702-.563l-.002.034c0 .151.06.321.176.51.117.19.253.379.428.55.166.17.36.312.575.425.214.114.418.17.613.17.243 0 .486-.038.76-.113.262-.076.525-.19.797-.331a6.09 6.09 0 001.51-1.136c.291 0 .584-.028.856-.066.282-.057.555-.133.818-.237a3.92 3.92 0 00.436-.215c-.264.68-.528 1.373-.796 2.098l-1.84.209.156.993.662-.057c.224-.018.428-.047.642-.075-.321.87-.633 1.769-.944 2.686-.302.918-.623 1.874-.964 2.858l2.609-.823c.311-.984.604-1.902.886-2.763.282-.852.555-1.665.818-2.422a12.568 12.568 0 002.629-1.022c.837-.435 1.655-1.003 2.463-1.694-.058.2-.117.388-.156.577-.049.18-.088.35-.127.492 0 .123.05.237.156.36.097.123.215.236.35.331.147.104.283.19.439.256.155.066.282.094.38.094.155 0 .34-.047.564-.151a5.98 5.98 0 00.73-.407c.263-.17.536-.35.808-.568.273-.208.536-.425.789-.633l.146-.124a2.92 2.92 0 00-.078.53c0 .104.059.237.185.388.137.16.283.303.448.454.175.142.35.265.535.37.185.094.331.141.439.141.155 0 .34-.047.564-.151.234-.104.477-.237.74-.407.263-.17.526-.35.799-.568.272-.208.545-.425.798-.633.253-.218.487-.417.71-.625.215-.198.4-.379.546-.52a5.055 5.055 0 00-.234-.246 2.72 2.72 0 00-.214-.227c-.078.066-.195.16-.341.283-.156.133-.321.265-.506.417-.185.151-.38.303-.584.463-.205.152-.4.294-.584.426a6.898 6.898 0 01-.487.312c-.146.076-.254.123-.331.123-.04 0-.059-.028-.059-.066 0-.274.049-.624.156-1.06.097-.426.244-.899.41-1.42.174-.51.369-1.059.593-1.626.214-.577.438-1.145.682-1.703h1.966c.059 0 .107 0 .146-.02a.19.19 0 00.078-.037c.068-.057.156-.142.244-.246.097-.114.184-.218.262-.322.068-.104.117-.19.146-.275.02-.075.01-.113-.058-.113l-2.386.085c.195-.464.39-.898.575-1.315l.526-1.116c.146-.332.282-.596.39-.814.106-.218.175-.36.213-.426.02-.019.02-.038.02-.047v-.01c0-.028-.03-.047-.097-.047-.069 0-.195.028-.36.076-.166.047-.351.104-.546.18a8.029 8.029 0 00-.613.227 6.01 6.01 0 00-.536.236 2.32 2.32 0 00-.477.265c-.107.085-.204.17-.272.255a.719.719 0 00-.156.237c-.04.085-.078.161-.107.237-.137.265-.282.577-.458.946-.165.369-.34.776-.525 1.22l-1.295.048a.635.635 0 00-.166.132c-.058.066-.097.142-.146.227a1.197 1.197 0 00-.107.227.575.575 0 00-.049.17c0 .02 0 .02.01.02h1.411c-.233.586-.457 1.182-.69 1.797a52.954 52.954 0 00-.806 2.345l-.003.002c-.156.133-.321.274-.516.425-.185.161-.38.322-.594.483-.195.16-.4.312-.584.445-.195.132-.36.246-.506.322-.146.085-.254.132-.322.132-.039 0-.058-.019-.058-.057 0-.075.03-.199.087-.388.069-.18.147-.388.244-.633.088-.237.195-.492.302-.757.117-.275.214-.53.311-.776.098-.246.176-.473.234-.672.068-.199.097-.35.097-.454 0-.095-.068-.209-.204-.341a4.845 4.845 0 00-.477-.379 3.265 3.265 0 00-.507-.302c-.155-.085-.262-.133-.3-.133-.02 0-.079.076-.157.237-.078.151-.165.36-.272.615-.108.255-.225.54-.351.87-.127.331-.253.672-.38 1.013-.477.426-.925.794-1.343 1.116-.429.322-.838.596-1.246.833a8.762 8.762 0 01-1.237.605c-.409.17-.847.313-1.324.426l.818-2.12c.253-.643.487-1.23.71-1.768a26.218 26.218 0 003.486-3.047c.516-.549.993-1.098 1.431-1.646.438-.55.818-1.089 1.13-1.628.32-.52.564-1.022.74-1.505.175-.473.262-.917.262-1.314a.72.72 0 00-.019-.18c-.01-.038-.04-.067-.068-.105a3.734 3.734 0 00-.283-.283 5.842 5.842 0 00-.36-.284c-.126-.085-.253-.17-.39-.237a1.648 1.648 0 00-.369-.142zm.243.966c.068 0 .098.047.098.141 0 .208-.058.474-.175.795a7.82 7.82 0 01-.507 1.088c-.214.398-.486.823-.788 1.277-.312.464-.652.928-1.022 1.391-.37.474-.77.937-1.198 1.4-.428.464-.866.9-1.334 1.316.166-.35.312-.662.439-.918.126-.255.233-.473.33-.634.107-.199.195-.369.263-.501.575-.975 1.071-1.798 1.5-2.489a38.87 38.87 0 011.119-1.646c.311-.426.575-.728.78-.927.204-.19.369-.293.495-.293zm.818 3.794c-.058 0-.146.066-.263.217a4.333 4.333 0 00-.32.53 4.562 4.562 0 00-.283.625c-.078.217-.117.387-.117.53 0 .028.058.084.165.16.117.076.254.152.41.237.155.075.31.151.476.217.175.067.322.095.438.105.04 0 .088-.039.156-.124.059-.075.127-.18.205-.302.068-.123.146-.256.224-.398.078-.151.146-.284.194-.416.068-.132.117-.246.156-.35.049-.104.069-.16.078-.19 0-.037-.058-.104-.175-.198a3.704 3.704 0 00-.409-.284 4.87 4.87 0 00-.496-.256 1.117 1.117 0 00-.439-.103zm-30.268 3.302c-.35.832-.701 1.637-1.061 2.384a31.92 31.92 0 01-1.023 1.987c-.32.567-.603 1.012-.866 1.334-.263.331-.467.492-.613.492-.068 0-.107-.028-.107-.113 0-.313.097-.691.282-1.146.185-.444.438-.936.77-1.466.33-.53.71-1.088 1.157-1.684a32.76 32.76 0 011.46-1.788zM10.109.172c5.261 0 9.584 3.904 10.065 8.895l-.023-.007-.294-.106c-.101-.039-.086-.106-.153-.104-.069 0-.103-.026-.103-.026s.036-.048.096-.134c.059-.085.126-.207.126-.207s-.035.057-.09.07c-.054.013-.332.041-.332.041s.02-.065.023-.113l.003-.134s-.046.002-.095.026c-.05.022-.178.082-.23.032a.345.345 0 01-.08-.25c.014-.066.052-.071.077-.077.027-.005.09-.004.09-.004s-.124-.064-.197-.094c-.073-.03-.187-.084-.187-.149 0-.065.02-.085.004-.135a.227.227 0 00-.05-.082s-.011.069-.048.069c-.038 0-.147-.05-.253-.167-.105-.117-.117-.126-.184-.15-.069-.024-.212-.145-.214-.236a.255.255 0 01.029-.137s-.03.018-.097.072c-.067.054-.096.048-.143.041-.05-.01-.086-.028-.075-.115.01-.087.05-.184.05-.236 0-.052-.018-.087-.018-.087s-.011.113-.057.104c-.046-.01-.105-.087-.135-.119-.029-.03.002.01-.037.049-.038.038-.086.083-.135 0-.05-.084-.21-.446-.199-.533.014-.087-.002-.14-.002-.14s-.007.057-.026.107c-.02.05-.017.118-.094.11-.074-.008-.185-.06-.185-.06s.368-.802.313-1.199c-.053-.395-.177-.946-.93-1.007-.752-.06-.998-.095-1.393.06-.396.155-.777.49-.777.49s-1.827-.667-2.727-.626c-.897.04-2.884.154-4.055.593-1.17.442-.985.286-1.496.648-.512.358-.61.417-.659.473-.05.054-.372.46-.494.557-.125.094-.15.142-.26.167-.11.024-.18.037-.185.072-.006.035-.025.132-.025.215 0 .084-.03.288-.098.366-.068.078-.27.33-.27.33s.038 0 .122.011l.086.013s-.186.137-.53.42c-.345.28-.63.567-.837.717-.21.15-.335.264-.506.347-.172.084-.57.344-.655.436-.084.091-.117.097-.134.128-.019.03-.078.14-.05.227.03.089.136.48.16.491.026.012.026.013.033.02.006.008.054.06.07.073a.349.349 0 00.049.032c.01.003.017.002.02.007.005.006.01.017.022.013.01-.004.01-.024.015-.031a.132.132 0 01.084-.037c.042-.002.051.007.069.012a.202.202 0 01.02.008s-.001.133.003.17c.003.036.015.077.017.1.002.025-.002.125-.002.153 0 .026.002.284.05.354.05.073.105.132.112.162.006.031.08.078.103.126.025.048.07.163.155.169.084.003.313-.01.363-.011.047-.002.057-.01.074-.013.02-.006.088 0 .088 0s.032.102.07.14a.334.334 0 00.127.064s-.023-.117-.012-.147c.013-.03-.002-.076.11-.087.112-.013 1.047.006 1.047.006s.067.048.105.048c.04 0 .252-.043.302.072.05.113-.12.119-.163.124-.04.004-.149.015-.181.026-.03.012-.088.028-.088.028s.006.056-.095.087c-.101.034-.142.075-.151.093a.58.58 0 01-.097.12.597.597 0 01-.172.043.274.274 0 01-.187-.115c-.046-.077-.048-.107-.048-.107s-.075.093-.05.165c.025.074.06.14.08.206.021.067.062.174.021.202a.608.608 0 01-.1.05s-.005.125.001.19c.004.063.017.131.021.16.002.03-.011.086.002.105.012.018.246.454.579.575.332.119.505.191.727.156.221-.037.573-.145.622-.145.05 0 .128-.011.151 0l.092.048s-.006-.044-.017-.063c-.012-.02-.02-.042-.006-.061.011-.018.025-.04.126-.048.1-.008.311-.041.412-.03.101.011.101.06.101.06l-.019.077s.006-.018.056-.018.105.06.16.156c.055.094.088.161.11.18.026.016.052 0 .083.014.03.015.03.017.048.025l.055.02s.004.08.02.124l.041.091s-.015-.085.021-.117c.034-.033.134-.085.178-.002.043.082.028.088.03.116 0 .027-.002.03.006.044l.027.04s-.01-.057.005-.064c.017-.008.056.015.086.03.033.013.103.013.103.013s.029.083.038.133c.008.048-.005.019.042.008l.08-.02s.005.068.003.148c0 .08.005.219-.046.276-.05.058-.1.074-.1.074a.6.6 0 00.14.011c.07-.003.189-.005.225.043.038.048.038.108.038.108s-.05.026-.09.04a3.354 3.354 0 01-.095.032s.027.032.036.04c.01.008.039.02.039.02v.072l-.023-.002s.01.083.023.11c.011.024.03.022.03.022l.105-.011h.061s-.017.055-.032.085c-.017.03-.06.119-.103.119l-.113-.002s.07.042.105.054a.112.112 0 00.082-.004 1.12 1.12 0 00.061-.024s.008.035-.01.067c-.015.03-.015.051-.015.051v.193l.062-.024s.032.058.032.1c0 .043-.008.127-.008.158 0 .032-.015.102-.017.18-.002.076.017.113.036.21.02.095.056.323.02.358-.039.037-.128.074-.16.119-.033.044-.064.098-.064.098s.107-.087.18-.083c.074.005.206-.004.215.046.01.052.025.156-.024.18-.05.024-.302.01-.302.01s.006.098.063.11c.057.015.107.008.134.071.026.065.028.111-.03.12-.058.01-.142.036-.163.06a.949.949 0 00-.06.108s.044-.049.075-.036a.257.257 0 01.107.093c.025.046.04.063-.002.098-.044.038-.15.058-.212.1-.061.045-.046.082-.067.105-.02.022.061-.065.105-.034.044.034.069.022.02.082-.05.06-.088.07-.088.07s.011.011.038.015l.067.008s-.016.044-.037.072c-.02.028-.091.098-.091.098s.022.024.051.037c.029.011.07.023.07.023s-.016.046-.036.074c-.019.03-.08.087-.08.087s.02.007.042.035c.023.028.05.05.075.054.025.002.065.01.065.01s-.021.1-.067.142c-.046.043-.096.1-.096.1s-.032-.007-.04.004c-.007.011-.017.054-.034.069l-.124.107s-.067.065-.077.11c-.01.046-.005.096-.005.096s.065-.139.145-.144c.078-.006.084.005.122.016.038.013.086.091.086.091s-.101.076-.14.134c-.038.057-.068.117-.068.117s.025.007.044.02c.019.013.05.04.05.04l.001.021C3.186 18.381 0 14.55 0 9.997 0 4.57 4.525.172 10.109.172z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fill}
        d="M10.128 16.606s-.472-.177-.787-.283c-.315-.105-.717-.23-.761-.198-.044.03-.037.026-.056.065l-.042.098s-.137-.01-.168.07c-.032.084-.04.192-.034.394.006.206.034.655.07.748.037.095.11.295.21.523.104.228.14.347.176.458.036.112.11.208.166.206.054-.003.596-.224.718-.295.122-.07.449-.35.575-.504.126-.153.162-.212.162-.212s.075-.007.134-.02a7.77 7.77 0 00.235-.054s.013.039.074.028c.06-.011.164-.047.164-.047s.086.019.118.012c.035-.008.117-.064.117-.064s.344.134.525.18c.181.049.353.095.492.106.138.013.19.013.19.013s.16.017.263.015c.103-.002.35-.028.47-.085.122-.06.206-.093.23-.13.026-.037.005-.171-.034-.262a.774.774 0 00-.171-.256c-.088-.089-.14-.347-.17-.447-.03-.1-.115-.412-.205-.646a6.716 6.716 0 00-.351-.746c-.06-.094-.122-.198-.212-.193-.092.008-.115.07-.262.175a5.32 5.32 0 00-.628.518c-.18.187-.349.352-.421.45l-.182.253s-.114.013-.202.013c-.088 0-.191.02-.254.04a.813.813 0 00-.149.077zM36.337 1.684c.01.028.02.075.04.142.01.056.029.142.048.255.02.104.04.236.059.397.02.161.019.35.019.568 0 .766-.078 1.58-.243 2.413a17.046 17.046 0 01-.72 2.555 19.488 19.488 0 01-1.15 2.526 18.574 18.574 0 01-1.548 2.375 16.274 16.274 0 01-1.898 2.081 13.134 13.134 0 01-2.2 1.656c.204-.804.418-1.656.652-2.573.234-.918.477-1.864.75-2.839.262-.984.554-1.987.866-3.009.302-1.031.643-2.053.993-3.075 0 0-.039-.047-.107-.151-.078-.095-.165-.227-.292-.379-.126-.151-.263-.33-.418-.52-.156-.19-.312-.388-.478-.577-.156-.19-.311-.37-.448-.53-.146-.17-.272-.303-.37-.407a67.028 67.028 0 00-.856 2.773 93.37 93.37 0 00-.76 2.81 61.143 61.143 0 00-.642 2.677c-.195.87-.35 1.665-.497 2.394a32.259 32.259 0 00-.311 1.959 10.237 10.237 0 00-.108 1.353c0 .132.01.246.04.34a.85.85 0 00.107.227c.039.076.107.18.204.313.088.132.205.274.331.407.127.132.263.264.41.368a.71.71 0 00.408.152c.03 0 .058 0 .117-.01.058-.009.127-.038.195-.066.525-.208 1.12-.54 1.8-.984a19.399 19.399 0 002.104-1.627c.72-.644 1.44-1.372 2.17-2.186a23.452 23.452 0 002.016-2.65 20.702 20.702 0 001.636-3.027c.467-1.06.817-2.167 1.032-3.302l-2.95-2.83zm4.46 5.488c-.059 0-.146.066-.254.217a4.333 4.333 0 00-.32.53 6.138 6.138 0 00-.283.625 1.626 1.626 0 00-.117.53c0 .028.058.084.165.16.108.076.244.152.4.237.156.075.311.151.486.217.166.067.312.095.43.105.038 0 .096-.039.165-.124a4.24 4.24 0 00.204-.302c.068-.123.146-.256.224-.398.078-.151.146-.284.204-.416.058-.132.107-.246.156-.35.039-.104.068-.16.068-.19 0-.037-.059-.104-.166-.198a5.181 5.181 0 00-.418-.284 5.04 5.04 0 00-.506-.256 1.117 1.117 0 00-.439-.103zm5.22 3.602c-.007-.002-.012-.002-.012.002a.077.077 0 01-.039.01 5.35 5.35 0 00-1.022.416c-.331.17-.613.34-.866.511a9.551 9.551 0 00-.838.634 7.12 7.12 0 00-1.398 1.617l-.091.077c-.156.133-.322.274-.507.425-.194.161-.389.322-.593.483-.205.16-.41.313-.594.445a4.41 4.41 0 01-.507.322c-.136.085-.253.132-.32.132-.04 0-.06-.019-.06-.057 0-.075.02-.189.069-.34.049-.161.107-.332.185-.54a9.47 9.47 0 01.243-.662c.088-.237.185-.473.273-.71.097-.236.185-.454.263-.68.087-.218.155-.408.204-.568a.28.28 0 00.03-.105.232.232 0 00.01-.075c0-.095-.07-.209-.206-.341-.136-.133-.301-.256-.467-.379a3.767 3.767 0 00-.506-.302c-.156-.085-.263-.133-.292-.133-.029 0-.088.085-.175.265a9.5 9.5 0 00-.302.681c-.117.284-.244.606-.39.975-.146.36-.272.738-.408 1.117-.127.378-.253.747-.36 1.116-.108.369-.205.69-.273.974 0 .123.058.237.155.36.098.123.215.237.36.331.137.104.283.19.43.256.155.066.282.094.38.094.165 0 .35-.047.583-.151a5.91 5.91 0 00.72-.407c.264-.17.526-.35.799-.568.22-.168.434-.34.644-.51a3.892 3.892 0 00-.089.52c0 .133.039.274.117.407.068.132.165.255.262.36.117.103.215.189.331.255a.525.525 0 00.264.094h.058c.02 0 .038 0 .077-.019.273-.085.585-.217.906-.397.331-.18.653-.379.983-.596.322-.218.633-.445.925-.69.302-.247.555-.483.77-.71a9.676 9.676 0 00-.176.634c-.039.17-.068.312-.078.435-.01.123-.02.217-.02.293.01.076.01.133.01.18 0 .142.04.265.117.369.078.113.185.208.302.284.117.085.243.151.39.189.145.047.272.076.389.076.175 0 .38-.057.614-.161.224-.114.476-.247.73-.417.262-.16.525-.36.798-.567.263-.218.535-.435.788-.653.254-.218.487-.426.711-.634.224-.198.419-.379.574-.52-.078-.076-.155-.161-.243-.256-.087-.094-.165-.18-.224-.236-.077.075-.195.17-.34.302-.147.133-.322.275-.507.426-.185.151-.38.313-.584.473-.195.161-.39.303-.564.436-.185.123-.342.227-.478.321-.146.076-.243.123-.301.123-.04 0-.06-.019-.06-.066 0-.066.01-.17.02-.303.01-.123.03-.284.079-.473.038-.19.107-.407.185-.653.087-.246.204-.52.35-.823 0-.076-.02-.18-.078-.303a5.373 5.373 0 00-.204-.416 2.291 2.291 0 00-.263-.388 1.072 1.072 0 00-.244-.255c-.019-.01-.029-.01-.029 0-.01 0-.01.009-.01.018a4.326 4.326 0 01-.457.606c-.175.199-.35.378-.516.53-.195.189-.39.36-.604.52-.224.19-.447.37-.662.54-.214.17-.419.321-.594.444-.185.123-.34.227-.486.303a.849.849 0 01-.351.104c-.088 0-.136-.047-.136-.161 0-.151.087-.388.272-.729.195-.34.526-.737 1.013-1.2a12.627 12.627 0 011.363-1.126c.263-.19.545-.36.847-.521l.02-.02c.01 0 .01-.009 0-.028a.872.872 0 00-.166-.151c-.078-.057-.175-.113-.282-.18-.108-.056-.224-.113-.331-.17a2.162 2.162 0 00-.31-.135z"
      />
    </svg>
  );
};

export default React.forwardRef(LogoInline);
