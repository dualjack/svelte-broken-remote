<script lang="ts">

    import {executeSomething, getList, getList2, getList3, getList4, getList5, getList6} from "./test.remote.ts";
    import {invalidateAll, refreshAll} from "$app/navigation";

    //  Problem occurs both with async await and
    const list = $derived(getList({organisationId: 1234}).current);
    const list2 = $derived(getList2({organisationId: 1234}).current);
    const list3 = $derived(getList3({organisationId: 1234}).current);
    const list4 = $derived(getList4({organisationId: 1234}).current);
    const list5 = $derived(getList5({organisationId: 1234}).current);
    const list6 = $derived(getList6({organisationId: 1234}).current);

</script>

<div class="min-h-screen flex flex-col items-center justify-center">
    <div>
        {#each list?.list as item (item)}
            <p>{item}</p>
        {/each}
        <pre hidden>{JSON.stringify(list2, null, 2)}</pre>
        <pre hidden>{JSON.stringify(list3, null, 2)}</pre>
        <pre hidden>{JSON.stringify(list4, null, 2)}</pre>
        <pre hidden>{JSON.stringify(list5, null, 2)}</pre>
        <pre hidden>{JSON.stringify(list6, null, 2)}</pre>
    </div>
</div>