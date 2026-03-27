<script lang="ts">
    import Wrapper from "./Wrapper.svelte";
    import {executeSomething} from "./test.remote.ts";
    import {invalidateAll} from "$app/navigation";

    let {data} = $props();

    async function onDoSomething(){
        try {
            await executeSomething({organisationId: 1234});

            //  <--- this works fine when calling command with "updates()" and passing each thing inside,
            //  but sometimes breaks when using invalidateAll() or refreshAll().
            await invalidateAll();
        } catch (e) {

        }
    }
</script>

<div class="flex gap-8">
    <button onclick={() => invalidateAll()} class="p-2 border cursor-pointer">
        InvalidateAll
    </button>
    <button onclick={() => onDoSomething()} class="p-2 border cursor-pointer">
        Do something
    </button>
</div>

<Wrapper/>

<pre>{JSON.stringify(data, null, 2)}</pre>