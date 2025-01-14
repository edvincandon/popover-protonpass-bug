function App() {
  return (
      <>
        <button class="btn" onclick="my_modal_2.showModal()">open modal</button>
        <dialog id="my_modal_2" class="modal bg-transparent">
            <div class="modal-box flex flex-col gap-4 p-8 bg-transparent border border-secondary">
                <label class="fieldset-label">Email</label>
                <input type="email" class="input w-full" placeholder="Email"/>

                <label class="fieldset-label">Password</label>
                <input type="password" class="input w-full" placeholder="Password"/>

                <button class="btn btn-neutral mt-4">Login</button>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>
    );
}

export default App;
