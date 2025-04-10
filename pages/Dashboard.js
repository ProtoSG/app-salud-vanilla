import { AlertIcon } from "../icons/index.js";

export function Dashboard() {
  return `
    <section class="flex flex-col w-full gap-6 py-6 pr-12 pl-3">
      <header class="flex gap-2 items-center ">
        <div class="size-12 rounded-full bg-gray-400"></div>
        <span> Giovanni el kchudo del Año</span>
      </header>
      
      <main class="w-full">
        <div class="flex justify-between">
          <div>
            <h3 class="text-2xl font-bold">Citas del dia jueves 10 de Abril del 2025</h3>
            <section>
              <div class="flex gap-8">
                <div class="relative flex items-center border-r-2 border-black px-8">
                  <span>8:00 AM</span>
                  <div class="absolute -right-3 button-1/2 size-5 bg-black rounded-full"></div>
                </div>
                <article class="flex flex-col gap-2 py-4">
                  <header class="flex gap-4 justify-between items-center">
                    <p class="text-xl">Diego Salazar Garcia</p>
                    <span class="bg-zinc-500 text-white rounded px-3 ">Pendiente</span>
                  </header>
                  <main>
                    <p>Detalles de  la cita...</p>
                  </main>
                </article>
              </div>
            </section>
          </div>
          <aside>
            <h3 class="text-2xl font-bold">Notificaciones</h3>
            <section>
              <article class="flex gap-2 bg-[#323232] p-3 rounded drop-shadow-2xl w-80 text-white">
                <aside>
                  ${AlertIcon()}
                </aside>
                <main class="flex flex-col gap-2">
                  <h4 class="leading-none text-lg font-bold">Titulo de la Notificacion</h4>
                  <p class="text-pretty text-sm ">Lorem viverra urna. elit. tortor. ex ipsum sollicitudin. nec elit. tincidunt lorem. ex placerat. Ut id ... </small>
                  <div class="flex justify-end">
                    <button class="bg-white text-black font-semibold rounded-md px-3 py-2">Aceptar</button>
                  </div>
                </main>
              </article>
            </section>
          </aside>
        </div>
      </main>
    </section>
  `;
}
